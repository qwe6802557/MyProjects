import React, { Component } from "react";
import {  List, Avatar, Button, Skeleton, Tabs, Input, message, Spin, Modal, Badge  } from 'antd';
import { ContactsOutlined , TeamOutlined , SearchOutlined, PlusCircleOutlined, MessageOutlined  } from '@ant-design/icons';
import {
    reqFriendList, reqDeleteFriend,
    reqNotification, reqUserList, reqGroupList,
    reqAddGroup, reqDeleteGroup
} from "../../api/contact";
import Socket from "../../utils/socket";
import ContactMain from "./ContactMain";
import AddModal from "./AddModal";
import RoomModal from "./RoomModal";
import store from "../../store";
import moment from "moment";
import "./Contact.less";

const { TabPane } = Tabs;
export default class Contact extends Component{
    state = {
        value: 'list',
        initLoading: false,
        confirmLoading: false,
        spinning: false,
        isGroup: false,
        list: [],
        userList: [],
        showContact: false,
        friendId: '',
        socket: Socket(store.getState().auth.user._id),
        searchList: [],
        inputValue: '',
        searchFlag: 0,
        groupFlag: 0,
        visibleModal: false,
        titleModal: 'Available Users',
        okText: 'Send Request',
        changeSelectId: '',
        messageList: [],
        roomVisible: false,
        groupList: [],
        searchGroupList: [],
        groupMember: [],
        roomObj: {},
        friendItem: {}
    };

    getFriendsList = () => {
        this.setState({
            spinning: true
        }, () => {
            reqFriendList({
                user_id: store.getState().auth.user._id
            }).then( res => {
                const { code, messageBody } = res.data;
                if (code === 0){
                    this.setState({
                        list: messageBody
                    }, () => {
                        reqUserList().then( res => {
                            const { code, messageBody } = res.data;
                            if (code === 0){
                                const userList = [];
                                if (this.state.list.length > 0){
                                    messageBody.forEach( item => this.state.list.forEach( cItem => {
                                            if(cItem.friend_id !== item._id  && item._id !== store.getState().auth.user._id){
                                                userList.push(item);
                                            }
                                        }
                                    ));
                                } else {
                                    messageBody.forEach( item => {
                                        if (item._id !== store.getState().auth.user._id){
                                            userList.push(item);
                                        }
                                    });
                                }

                                this.setState({
                                    userList: userList
                                })
                            }
                            code !== 0 && message.error(res.data.message);
                        })
                    })
                } else {
                    message.error(res.data.message);
                }
                this.setState({
                    spinning: false
                });
            });
        });
    };

    deleteFriends = (item) => {
        Modal.confirm({
            title: 'Remove Friend',
            content: 'Are you sure to remove this friend?',
            okText: 'Confirm',
            cancelText: 'Cancel',
            onOk: () => {
                reqDeleteFriend({
                    user_id: store.getState().auth.user._id,
                    friend_id: item.friend_id
                }).then( res => {
                    const { code } = res.data;
                    code === 0 && message.success(res.data.message) && this.getFriendsList();
                    code !== 0 && message.error(res.data.message);
                })
            }
        });
    };

    toContact = (item) => {
        this.setState({
            showContact: true,
            isGroup: false,
            friendItem: item,
            friendId: item.friend_id
        });
    };

    toContactGroup = item =>{
        this.setState({
            showContact: true,
            isGroup: true,
            friendId: item._id,
            roomObj: item
        });
    };

    backToMain = () => {
        this.setState({
            showContact: false
        })
    };

    search = () => {
        this.setState( {
            searchFlag: this.state.searchFlag + 1
        }, () => {
            if (this.state.searchFlag >= 2){
                this.setState({
                    list: this.state.searchList.filter( item => item.friend_info.name.includes(this.state.inputValue))
                });
            } else {
                this.setState({
                    searchList: this.state.list
                }, () => {
                    this.setState({
                        list: this.state.list.filter( item => item.friend_info.name.includes(this.state.inputValue))
                    });
                })
            }
        });
    };

    searchGroup = () => {
        this.setState( {
            groupFlag: this.state.groupFlag + 1
        }, () => {
            if (this.state.groupFlag >= 2){
                this.setState({
                    groupList: this.state.searchGroupList.filter( item => item.roomName.includes(this.state.inputValue))
                });
            } else {
                this.setState({
                    searchGroupList: this.state.groupList
                }, () => {
                    this.setState({
                        groupList: this.state.searchGroupList.filter( item => item.roomName.includes(this.state.inputValue))
                    });
                })
            }
        });
    };

    inputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        });
    };

    handleOk = (select) => {
        const { user_id, selectedId, changeSelectId } = select;
        const friendsObj = [];
        if (selectedId.length === 0 ) {
            return message.warning('Please select the friends you want to add');
        }
        this.setState({
            confirmLoading: true,
            changeSelectId
        }, () => {
            selectedId.forEach( item => {
                friendsObj.push({
                    user_id,
                    content: store.getState().auth.user.name + ' sent you a friend request',
                    friend_id: item,
                    type: 1
                })
            });
            this.state.socket.emit('addFriends', friendsObj);
        });
    };

    roomOk  = (select) => {
        const { selectedId, name } = select;
        if (!name){
            return message.warning('Group name is required!');
        }
        if (selectedId.length === 0 ) {
            return message.warning('Please select group members!');
        }
        this.setState({
            confirmLoading: true
        }, () => {
            selectedId.push(store.getState().auth.user);
            reqAddGroup({
                roomLeader: store.getState().auth.user._id,
                roomMember: selectedId,
                roomName: name
            }).then( res => {
                const { code } = res.data;
                code === 0 && message.success(res.data.message) && this.getGroupList();
                code !== 0 && message.error(res.data.message);
                this.setState({
                    roomVisible: false,
                    confirmLoading: false
                });
            });
        });
    };

    handleCancel = () => {
        this.setState({
            visibleModal: false,
            roomVisible: false
        })
    };

    addFriends = () => {
        this.setState({
            okText: 'Send Request',
            titleModal: 'Available Users',
            visibleModal: true
        });
    };

    addGroup = () => {
      this.setState({
          okText: 'Create',
          roomVisible: true
      });
    };
    // event binding
    eventBind = () => {
        this.state.socket.on('addFriends', (data) => {
            const { code } = data;
            code === 0 && message.success(data.message);
            code !== 0 && message.error(data.message);
            this.setState({
                visibleModal: false,
                confirmLoading: false
            }, () => {
                this.state.changeSelectId();
            });
        });

        this.state.socket.on('agreeAdd', data => {
            const { code } = data;
            code === 0 && message.success(data.message);
            code !== 0 && message.error(data.message);
            this.getNotification();
        });

        this.state.socket.on('rejectAdd', data => {
            const { code } = data;
            code === 0 && message.success(data.message);
            code !== 0 && message.error(data.message);
            this.getNotification();
        });

        this.state.socket.on('confirmAdd', data => {
            const { code } = data;
            code === 0 && this.getNotification();
            code !== 0 && message.error(data.message);
        });

        this.state.socket.on('addFriendsMessage', data => {
            const { code } = data;
            code === 0 && this.getNotification() && this.getFriendsList();
        })
    };
   // get notifications
    getNotification = () => {
        reqNotification({
            user_id: store.getState().auth.user._id
        }).then( res => {
            const { code, messageBody } = res.data;
            code === 0 && this.setState({
                messageList: messageBody,
                spinning: false
            });
            code !== 0 && message.error(res.data.message);
        });
    };
    // Accept friend request
    agreeAdd = (item) => {
        this.setState({
            spinning: true
        }, () => {
            item.isAllowed = 1;
            this.state.socket.emit('agreeAdd', item);
        });
    };
    // Decline friend request
    rejectAdd = (item) => {
        this.setState({
            spinning: true
        }, () => {
            item.isAllowed = 2;
            this.state.socket.emit('rejectAdd', item);
        });
    };
    // Confirm notification
    confirmAdd = (item) => {
        this.state.socket.emit('confirmAdd', item);
    };
    // get group list
    getGroupList = () => {
      reqGroupList({
          user_id: store.getState().auth.user._id
      }).then( res => {
         const { code, messageBody } = res.data;
         code === 0 && this.setState({
            groupList: messageBody
         });
         code !== 0 && message.error(res.data.message);
      });
    };
    // Delete Group
    deleteGroup = _id => {
        Modal.confirm({
            title: 'Delete Group',
            content: 'Are you sure to delete this group?',
            okText: 'Confirm',
            cancelText: 'Cancel',
            onOk: () => {
                reqDeleteGroup({
                    _id
                }).then( res => {
                    const { code } = res.data;
                    code === 0 && message.success(res.data.message) && this.getGroupList();
                    code !== 0 && message.error(res.data.message);
                });
            }
        });
    };

    componentDidMount() {
        this.getFriendsList();
        this.eventBind();
        this.getNotification();
        this.getGroupList();
    }

    render() {
        const { initLoading, list, spinning, showContact, friendId,
            visibleModal, titleModal, okText, confirmLoading, messageList } = this.state;
        const contact = {
            showContact: showContact,
            backToMain: this.backToMain,
            friendId,
            socket: this.state.socket,
            friendItem: this.state.friendItem,
            roomObj: this.state.roomObj,
            isGroup: this.state.isGroup
        };

        const addModal = {
            visibleModal,
            handleOk: this.handleOk,
            handleCancel: this.handleCancel,
            titleModal,
            okText,
            confirmLoading,
            list: this.state.userList
        };

        const roomModal = {
            visibleModal: this.state.roomVisible,
            handleOk: this.roomOk,
            handleCancel: this.handleCancel,
            titleModal,
            okText,
            confirmLoading,
            list: this.state.list.map( item => item.friend_info)
        };

        return (<div id="contact">
            <div className="contact-content">
                <Tabs defaultActiveKey="1">
                    <TabPane
                        tab={
                            <span>
                          <ContactsOutlined  />
                          Friend List
                        </span>
                                        }
                                        key="1"
                                    >
                        <div className="searchBar">
                            <Input placeholder="Search" style={{width: '200px', marginRight: '10px'}} value={this.state.inputValue} onChange={this.inputChange}/>
                            <Button icon={<SearchOutlined />} type="primary" onClick={this.search}></Button>
                            <Button icon={<PlusCircleOutlined />} onClick={this.addFriends}>Add Friend</Button>
                        </div>
                        <Spin spinning={spinning} tip={'Friend list loading...'}>
                            <List
                                className="demo-loadmore-list"
                                loading={initLoading}
                                itemLayout="horizontal"
                                dataSource={list}
                                renderItem={item => (
                                    <List.Item
                                        actions={[<a key="list-loadmore-edit"  onClick={this.toContact.bind(this, item)}>Chat</a>, <a key="list-loadmore-more" onClick={this.deleteFriends.bind(this, item)}>Remove Friend</a>]}
                                    >
                                        <Skeleton avatar title={false} loading={item.loading} active>
                                            <List.Item.Meta
                                                avatar={
                                                    <Avatar src={item.friend_info? item.friend_info.avatar : "https://www.pngkey.com/png/detail/46-461081_cartoon-of-group-of-people.png"} />
                                                }
                                                title={<span style={{fontSize: '18px'}}>{item.friend_info? item.friend_info.name : ''}</span>}
                                                description={<span>{item.friend_info? item.friend_info.email : ''}</span>}
                                            />
                                            <div>Time Registered:{moment(item.friend_info? item.friend_info.date : '').format('YYYY-MM-DD hh:ss')}</div>
                                        </Skeleton>
                                    </List.Item>
                                )}
                            />
                        </Spin>
                    </TabPane>
                    <TabPane
                                        tab={
                                            <span>
                          <TeamOutlined  />
                          My Groups
                        </span>
                                        }
                                        key="2"
                                    >
                            <div className="searchBar">
                                <Input placeholder="Search" style={{width: '200px', marginRight: '10px'}} value={this.state.inputValue} onChange={this.inputChange}/>
                                <Button icon={<SearchOutlined />} type="primary" onClick={this.searchGroup}></Button>
                                <Button icon={<PlusCircleOutlined />} onClick={this.addGroup}>Create Group</Button>
                            </div>
                            <Spin spinning={spinning} tip={'Group list loading...'}>
                                <List
                                    className="demo-loadmore-list"
                                    loading={initLoading}
                                    itemLayout="horizontal"
                                    dataSource={this.state.groupList}
                                    renderItem={item => (
                                        <List.Item
                                            actions={[<a key="list-loadmore-edit" onClick={this.toContactGroup.bind(this, item)}>Chat</a>, <a key="list-loadmore-more" onClick={this.deleteGroup.bind(this, item._id)}>Delete Group</a>]}
                                        >
                                            <Skeleton avatar title={false} loading={item.loading} active>
                                                <List.Item.Meta
                                                    avatar={
                                                        <Avatar src={item.avatar || "https://www.pngkey.com/png/detail/46-461081_cartoon-of-group-of-people.png"} />
                                                    }
                                                    title={<span style={{fontSize: '18px'}}>{item.roomName}</span>}
                                                    description={<span>Number of members: { this.state.groupList.length > 0 ? item.roomMember.length : 0}</span>}
                                                />
                                                <div>Time Created:{moment(item.date).format('YYYY-MM-DD hh:ss')}</div>
                                            </Skeleton>
                                        </List.Item>
                                    )}
                                />
                            </Spin>
                    </TabPane>
                    <TabPane
                        tab={
                            <Badge count={messageList.length}>
                                <span>
                                  <MessageOutlined />
                                  Notifications
                                </span>
                            </Badge>
                        }
                        key="3"
                    >
                        <Spin spinning={spinning} tip={'Notifications loading...'}>
                            <List
                                className="demo-loadmore-list"
                                loading={initLoading}
                                itemLayout="horizontal"
                                dataSource={messageList}
                                renderItem={item => {
                                    if (item.friend_id === store.getState().auth.user._id && item.isAllowed !== 0){
                                        return ( <List.Item
                                            actions={item.friend_id === store.getState().auth.user._id && item.isAllowed === 0 ?
                                                [<a key="list-loadmore-edit" onClick={this.agreeAdd.bind(this, item)}>Accept</a>, <a key="list-loadmore-more" onClick={this.rejectAdd.bind(this, item)}>Decline</a>] : [<a key="list-loadmore-more" onClick={this.confirmAdd.bind(this, item)}>Confirm</a>]}
                                        >
                                            <Skeleton avatar title={false} loading={item.loading} active>
                                                <List.Item.Meta
                                                    avatar={
                                                        <MessageOutlined />
                                                    }
                                                    title={<span style={{fontSize: '18px'}}>{item.type === 1? 'Friend Request' : 'Instant Message'}</span>}
                                                    description={<span>{item.isAllowed === 1? 'Content: you are friends now!' : 'The request has been declined'}</span>}
                                                />
                                                <div>Time:{moment(item.date).format('YYYY-MM-DD hh:ss')}</div>
                                            </Skeleton>
                                        </List.Item>)
                                    } else {
                                        return ( <List.Item
                                            actions={item.friend_id === store.getState().auth.user._id && item.isAllowed === 0 ?
                                                [<a key="list-loadmore-edit" onClick={this.agreeAdd.bind(this, item)}>Accept</a>, <a key="list-loadmore-more" onClick={this.rejectAdd.bind(this, item)}>Decline</a>] : [<a key="list-loadmore-more" onClick={this.confirmAdd.bind(this, item)}>Remove</a>]}
                                        >
                                            <Skeleton avatar title={false} loading={item.loading} active>
                                                <List.Item.Meta
                                                    avatar={
                                                        <MessageOutlined />
                                                    }
                                                    title={<span style={{fontSize: '18px'}}>{item.type === 1? 'Friend Request' : 'Instant Message'}</span>}
                                                    description={<span>Content: {item.content}</span>}
                                                />
                                                <div>Time:{moment(item.date).format('YYYY-MM-DD hh:ss')}</div>
                                            </Skeleton>
                                        </List.Item>)
                                    }
                                }}
                            />
                        </Spin>
                    </TabPane>
                </Tabs>
            </div>

                {
                    this.state.showContact ?
                    <div className="contact-dialog">
                        <ContactMain {...contact}/>
                    </div> : ''
                }
            <AddModal {...addModal}/>
            <RoomModal {...roomModal}/>
        </div>);
    }
}
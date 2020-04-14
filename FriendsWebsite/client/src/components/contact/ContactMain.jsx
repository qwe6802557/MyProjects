import React, { Component } from "react";
import "./ContactMain.less";
import {Avatar, List, message, Skeleton, Button} from "antd";
import {  TeamOutlined } from '@ant-design/icons';
import ScrollBar from 'react-gemini-scrollbar';
import store from "../../store";
import {reqFriendList} from "../../api/contact";
import moment from "moment";

export default class ContactMain extends Component{

    state = {
        list: [],
        initLoading: false,
        messageContent:[],
        messageText: '',
        socket: {},
        user_id: store.getState().auth.user._id,
        sendLoading: false,
        title: ''
    };

    getFriendsList = () => {
        this.setState({
            spinning: true
        }, () => {
            reqFriendList().then( res => {
                const { code, messageBody } = res.data;
                if (code === 0){
                    this.setState({
                        list: messageBody
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

    topMain = () => {
        const { messageContent } = this.state;
        if (messageContent.length > 0) {
           return  messageContent.map( (item, index) => {
                return (
                    <div key={item._id}>
                        {
                            item.user_id === this.state.user_id ?
                                (<div className="main-message message-right">
                                    {
                                        (!!messageContent[index - 1] && ((item.date - messageContent[index - 1].date) > 300000)) || !messageContent[index - 1] ?
                                                    <span className="message-date">
                                                        <span className="message-date" style={{margin: 0}}>
                                                                {moment(item.date).format('YYYY-MM-DD hh:mm')}
                                                        </span>
                                                    </span>: ''
                                    }
                                    <div className="message-box message-box-right">
                                        <div className="text-content">
                                            <div className="text-title">
                                                {store.getState().auth.user.name}
                                            </div>
                                            <div className="message-text message-text-right">
                                                {item.content}
                                            </div>
                                        </div>
                                        <img src={store.getState().auth.user.avatar} alt="" className="right" />
                                    </div>
                                </div>) : (
                                    <div className="main-message">

                                            {
                                                (!!messageContent[index - 1] && ((item.date - messageContent[index - 1].date) > 300000)) || !messageContent[index - 1] ?
                                                    <span className="message-date">
                                                        <span className="message-date" style={{margin: 0}}>
                                                                {moment(item.date).format('YYYY-MM-DD hh:mm')}
                                                        </span>
                                                    </span>: ''
                                            }
                                        <div className="message-box">
                                            <img src={item.friend_avatar} alt="" />
                                            <div className="text-content">
                                                <div className="text-title-left">
                                                    {item.friend_name}
                                                </div>
                                                <div className="message-text">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                )
            });
        } else {
            return '';
        }
    };

    sendMessage = () => {
        if (!this.state.messageText){
            return false;
        }
        this.setState({
            sendLoading: true
        }, () => {
            if (!this.props.isGroup){
                this.state.socket.emit('msg', { user_id: store.getState().auth.user._id, friend_id: this.props.friendItem.friend_id, content: this.state.messageText});
            }else {
                this.state.socket.emit('msgGroup', { user_id: store.getState().auth.user._id, friend_id: this.props.roomObj._id, content: this.state.messageText});
            }
        });
    };

    getMessageContent = () => {
        this.state.socket.emit('getMessageContent', { user_id: store.getState().auth.user._id, friend_id: this.props.friendId });
    };

    getGroupMessage = () => {
        this.state.socket.emit('getGroupMessage', { user_id: store.getState().auth.user._id, friend_id: this.props.roomObj._id })
    };

    eventBind = () => {
        this.state.socket.on('msg', (data) => {
            const  { code } = data;
            code === 0 && this.setState({
                messageText: '',
                sendLoading: false
            }, () => {
                this.getMessageContent();
            });
        });
        this.state.socket.on('getMessageContent', (data) => {
            this.setState({
                messageContent: data.messageBody
            }, () => {
                this.toScrollBottom();
            });
        });

        this.state.socket.on('msgGroup', (data) => {
            const { code } = data;
            console.log(1);
            code === 0 && this.setState({
                messageText: '',
                sendLoading: false
            }, () => {
                this.getGroupMessage();
            });
        });

        this.state.socket.on('getGroupMessage', data => {
            this.setState({
                messageContent: data.messageBody
            }, () => {
                this.toScrollBottom();
            });
        });
    };

    inputText = (e) => {
        this.setState({
            messageText: e.currentTarget.value
        })
    };

    backToMain = () => {
        this.props.backToMain();
    };

    toScrollBottom = () => {
        document.querySelector('.top-main').scrollTop = document.querySelector('.top-main').scrollHeight;
    };

    componentDidMount() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        document.querySelector('.contact-dialog').style.top = scrollTop + 'px';
        document.querySelector('.contact-dialog').style.bottom = -scrollTop + 'px';
        document.querySelector('html').style.overflow = 'hidden';
        /*this.getFriendsList();*/
        this.setState({
            socket: this.props.socket
        }, () => {
            this.eventBind();
            if (this.props.isGroup){
                this.getGroupMessage();
            } else {
                this.getMessageContent();
            }
        })
    };

    componentWillUnmount() {
        document.querySelector('html').style.overflow = 'auto';
    }

    render() {
        const { initLoading } = this.state;
        return (<div id="contact-main">
            {
                this.props.isGroup? <div className="contact-left-bar">
                    <ScrollBar>
                        <div className="titleList">
                            <h1><TeamOutlined/><span className="team">Group Members</span></h1>
                        </div>
                        <List
                            className="demo-loadmore-list"
                            loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={this.props.roomObj.roomMember}
                            renderItem={item => (
                                <List.Item>
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src={item.avatar || "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
                                            }
                                            title={<span style={{fontSize: '16px'}}>{item.name}</span>}
                                            description={<span>{item.email}</span>}
                                        />
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    </ScrollBar>
                </div> : ''
            }
            <div className="contact-main-area">
                <div className="main-top">
                    <div className="top-name">
                        <h2>{this.props.isGroup? this.props.roomObj.roomName + ' (' + this.props.roomObj.roomMember.length  +')' : this.props.friendItem.friend_info.name}</h2>
                    </div>
                    <div className="top-main">
                        {
                            this.topMain()
                        }
                    </div>
                </div>
                <div className="main-bottom">
                    <textarea rows="3" style={{width: '100%'}} onChange={this.inputText} value={this.state.messageText}/>
                    <Button onClick={this.sendMessage} loading={this.state.sendLoading}>Send</Button>
                    <Button type="primary" className="cancel" onClick={this.backToMain}>Go Back</Button>
                </div>
            </div>
        </div>)
    }
}
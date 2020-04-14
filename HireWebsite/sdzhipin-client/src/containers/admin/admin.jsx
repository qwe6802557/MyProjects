import React,{ Component } from 'react';
import { reqAuthorityList, reqDeleteSingle, reqDeleteHire, reqGetEdit } from "../../api";
import Cookies from "js-cookie";
import { resetUser } from '../../redux/actions'
import {connect} from "react-redux";
import { Badge, Tabs, Modal, WhiteSpace, List, Button, Toast} from "antd-mobile";
import SearchForm from './searchForm';
import AddBigGod from './addBigGod';
import AddBoss from './addBoss';
import AddHire from './addHire';
import './admin.less';
import message from "../message/message";

class Admin extends Component{
    state = {
        showFlag: 0,
        bigGodArr: [],
        bossArr: [],
        messageArr: [],
        addOrEdit: false,
        showForm: false,
        bigGodObj: {},
        bossObj: {},
        hireObj: {}
    };
    //通用查询列表
    getAuthority = (type) => {
        reqAuthorityList(type).then( res => {
            if (type === 0){
                const { code, messageBody } = res.data;
                code === 0 && this.setState({
                    bigGodArr: messageBody
                })
            } else if (type === 1){
                const { code, messageBody } = res.data;
                code === 0 && this.setState({
                    bossArr: messageBody
                })
            } else {
                const { code, messageBody } = res.data;
                code === 0 && this.setState({
                    messageArr: messageBody
                })
            }
        });
    };

    logout = () => {
        // alert('-----')
        Modal.alert('退出', '确定退出登陆吗?', [
            {text: '取消'},
            {
                text: '确定',
                onPress: () => {

                    // 干掉cookie中userid
                    Cookies.remove('userid');
                    // 干掉redux管理user
                    this.props.resetUser();
                    this.props.history.push( { pathname: '/login'});
                }
            }
        ])
    };

    delete = (id) => {
        Modal.alert('删除', '确定要删除吗？', [
            {text: '取消'},
            {
                text: '确定',
                onPress: () => {
                    if (this.state.showFlag !== 2){
                        reqDeleteSingle(id).then( res => {
                            const { code, message } = res.data;
                            if (code === 0){
                                Toast.success(message);
                                this.getAuthority(this.state.showFlag);
                            } else {
                                Toast.fail(message);
                            }
                        }).catch( err => {
                            Toast.fail('请求异常!');
                        })
                    } else {
                        reqDeleteHire(id).then( res => {
                            const { code, message } = res.data;
                            if (code === 0){
                                Toast.success(message);
                                this.getAuthority(this.state.showFlag);
                            } else {
                                Toast.fail(message);
                            }
                        }).catch( err => {
                            Toast.fail('请求异常!');
                        })
                    }
                }
            }
        ])
    };

    getEditFunc = (id) => {
        const { showFlag } = this.state;
        reqGetEdit(id).then( res => {
            const { code, message, messageBody } = res.data;
            code === 0 && showFlag === 0 && this.setState({
                showForm: true,
                bigGodObj: messageBody,
                addOrEdit: true,
            });
            code === 0 && showFlag === 1 && this.setState({
                showForm: true,
                bossObj: messageBody,
                addOrEdit: true,
            });
            code === 0 && showFlag === 2 && this.setState({
                showForm: true,
                hireObj: messageBody,
                addOrEdit: true,
            });
            code !== 0 && Toast.fail(message);
        }).catch( err => {
            Toast.fail('请求异常!');
        })
    };

    renderFunc = () => {
        const { showFlag, bigGodArr, bossArr, messageArr } = this.state;

        if (showFlag === 0){
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    <List style={{ margin: '5px 0', backgroundColor: 'white', position:'absolute', top: '41%' }} renderHeader={() => '列表数据'}>
                        {
                            bigGodArr.length > 0? bigGodArr.map( item => (
                                <List.Item
                                    extra={<div>
                                        <Button type="primary" size="small" icon="ellipsis" className="list-edit" onClick={this.getEditFunc.bind(this, item._id )}>编辑</Button>
                                        <Button type="warning" size="small" icon="cross-circle" className="list-del" onClick={this.delete.bind(this, item._id )}>删除</Button>
                                    </div>}
                                    multipleLine
                                    key={item._id}
                                >
                                    <List.Item.Brief>
                                        用户名:{item.username}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        求职岗位:{item.post}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        自我介绍:{item.info}
                                    </List.Item.Brief>
                                </List.Item>
                            )) : <List.Item>暂无数据</List.Item>
                        }
                    </List>
                </div>
            )
        } else if (showFlag === 1) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    <List style={{ margin: '5px 0', backgroundColor: 'white', position:'absolute', top: '41%'  }} renderHeader={() => '列表数据'}>
                        {
                            bossArr.length > 0 ? bossArr.filter( item => {
                                if (item.company){
                                    return item;
                                }
                            }).map( item => (
                                <List.Item
                                    extra={<div>
                                        <Button type="primary" size="small" icon="ellipsis" className="list-edit" onClick={this.getEditFunc.bind(this, item._id )}>编辑</Button>
                                        <Button type="warning" size="small" icon="cross-circle" className="list-del" onClick={this.delete.bind(this, item._id )}>删除</Button>
                                    </div>}
                                    multipleLine
                                    key={item._id}
                                    style={ {height: '180px'} }
                                >
                                    <List.Item.Brief>
                                        用户名:{item.username}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        公司:{item.company}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        招聘岗位:{item.post}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        招聘要求:{item.info}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        招聘月薪:{item.salary}
                                    </List.Item.Brief>
                                </List.Item>
                            )) : <List.Item>暂无数据</List.Item>
                        }
                    </List>
                </div>
            )
        } else if (showFlag === 2){
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    <List style={{ margin: '5px 0', backgroundColor: 'white', position:'absolute', top: '41%'  }} renderHeader={() => '列表数据'}>
                        {
                            messageArr.length > 0? messageArr.map( item => (
                                item.company?<List.Item
                                    extra={<div>
                                        <Button type="primary" size="small" icon="ellipsis" className="list-edit" onClick={this.getEditFunc.bind(this, item._id )}>编辑</Button>
                                        <Button type="warning" size="small" icon="cross-circle" className="list-del" onClick={this.delete.bind(this, item._id )}>删除</Button>
                                    </div>}
                                    multipleLine
                                    key={item._id}
                                    style={{height: '180px'}}
                                >
                                    <List.Item.Brief>
                                        招聘公司:{item.company}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        招聘岗位:{item.post}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        招聘要求:{item.info}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        招聘月薪:{item.salary}
                                    </List.Item.Brief>
                                    <List.Item.Brief>
                                        发布人:{item.username}
                                    </List.Item.Brief>
                                </List.Item> : ''
                            )) : <List.Item>暂无数据</List.Item>
                        }
                    </List>
                </div>
            )
        } else {
            return '';
        }
    };

    showButton = () => {
        const { showFlag } = this.state;
        if ( showFlag === 0){
            return (<div className="button-add"><Button icon="check-circle-o" type="ghost"  size="middle" style={ {margin: '10px auto', width:'50%'}} onClick={this.showBigGodAdd}>添加大神</Button></div>);
        } else if ( showFlag === 1){
            return (<div className="button-add"><Button icon="check-circle-o" type="ghost" size="middle" style={ {margin: '10px auto', width:'50%'}} onClick={this.showBossAdd}>添加老板</Button></div>);
        } else if ( showFlag === 2) {
            return (<div className="button-add"><Button icon="check-circle-o" type="ghost" size="middle" style={ {margin: '10px auto', width:'50%'}} onClick={this.showHireAdd}>添加招聘信息</Button></div>);
        } else {
            return (<div className="button-add"><Button icon="cross-circle" type="warning" size="middle" style={ {margin: '10px auto', width:'50%'}} onClick={this.logout}>退出系统</Button></div>);
        }
    };

    showForm = () => {
        const { showFlag } = this.state;

        if ( showFlag === 0){
            return {
                addTitle:'大神用户名',
                postTitle: '求职岗位',
                addPlace: '请输入大神用户名',
                postPlace: '请输入求职岗位'
            };
        } else if ( showFlag === 1){
            return {
                addTitle:'老板用户名',
                postTitle: '招聘岗位',
                addPlace: '请输入老板用户名',
                postPlace: '请输入招聘岗位'
            };
        } else {
            return {
                addTitle:'发布人',
                postTitle: '招聘岗位',
                addPlace: '发布人',
                postPlace: '请输入招聘岗位'
            };
        }
    };

    showMenu = () => {
        const { showForm, showFlag } = this.state;
        const formObj = this.showForm();
        if ( !showForm ){
            return (
                <div>
                    {
                        this.state.showFlag !== 3 ? <SearchForm {...formObj} tag={this}/> : ''
                    }
                    {
                        this.showButton()
                    }
                    <div className="wrap">
                        {
                            this.renderFunc()
                        }
                    </div>
                    <WhiteSpace/>
                </div>
            )
        } else {
                if (showFlag === 0){
                    return (<AddBigGod tag={this}/>);
                } else if (showFlag === 1) {
                    return (<AddBoss tag={this}/>);
                } else if (showFlag === 2){
                    return (<AddHire tag={this}/>);
                } else {
                    return '';
                }
        }
    };

    showBigGodAdd = () => {
        this.setState({
            showForm: true,
            addOrEdit: false,
            bigGodObj: {}
        });
    };

    showBossAdd = () => {
        this.setState({
            showForm: true,
            addOrEdit: false,
            bossObj: {}
        });
    };

    showHireAdd = () => {
        this.setState({
            showForm: true,
            addOrEdit: false,
            hireObj: {}
        });
    };

    componentDidMount() {
        this.getAuthority(this.state.showFlag);
    }

    render() {
        const tabs = [
            { title: <Badge /*text={'3'}*/>大神</Badge> },
            { title: <Badge >老板</Badge> },
            { title: <Badge /*dot*/>招聘信息</Badge> },
            { title: <Badge /*dot*/>退出系统</Badge> },
        ];

        const { showFlag } = this.state;
        
        return ( <div id="admin">
            <Tabs tabs={tabs}
                  initialPage={showFlag}
                  onChange={(tab, index) => { this.setState({showFlag: index, showForm: false}) && this.getAuthority(index)}}
                  onTabClick={(tab, index) => { this.setState({showFlag: index, showForm: false} && this.getAuthority(index))}}
            >
            </Tabs>
            {
                this.showMenu()
            }
        </div>);
    }
}
export default connect(
    state => ({user: state.user}),
    {resetUser}
)(Admin)
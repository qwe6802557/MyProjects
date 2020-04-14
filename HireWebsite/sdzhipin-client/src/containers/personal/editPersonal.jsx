/*
用户编辑个人信息模块
 */

import React from 'react'
import {List, WhiteSpace, Button, Modal, Grid, InputItem, Toast} from 'antd-mobile'
import {connect} from 'react-redux'
import {resetUser} from '../../redux/actions'
import store from "../../redux/store";
import { createForm } from 'rc-form';
import {reqPostEdit, reqGetEdit} from "../../api";
const Item = List.Item;

class EditPersonal extends React.Component {

    state = {
        user: store.getState().user,
        headerList: [],
        header: store.getState().user.header,
    };

    headerSelect = (menu) => {
        const header = menu.text;
        this.setState({
            header
        });
    };

    storeChange = () => {

    };

    Submit = () => {
        if (this.state.user.type === "laoban"){
            this.props.form.validateFields( ( err, values) => {
                values.header = this.state.header;
                const { header, username, password, info, post, salary, company, } = values;
                if (!header || !username || !password || !info || !post || !salary || !company){
                    return  Toast.info('请填写所有表单项!');
                }
                values.type = 'laoban';
                values._id = this.state.user._id;
                reqPostEdit(values).then( res => {
                    const { code, message } = res.data;
                    if ( code === 0){
                        Toast.success(message);
                        this.props.form.resetFields();
                        this.goBack();
                    }
                    code !== 0 && Toast.fail(message);
                }).catch( err => {
                    Toast.fail('请求异常!');
                    console.log(err);
                })
            })
        } else {
            this.props.form.validateFields( ( err, values) => {
                values.header = this.state.header;
                const { header, username, password, info, post } = values;
                if (!header || !username || !password || !info || !post){
                    return  Toast.info('请填写所有表单项!');
                }
                values.type = 'dashen';
                values._id = this.state.user._id;
                reqPostEdit(values).then( res => {
                    const { code, message } = res.data;
                    if ( code === 0){
                        Toast.success(message);
                        this.props.form.resetFields();
                        this.goBack();
                    }
                    code !== 0 && Toast.fail(message);
                }).catch( err => {
                    Toast.fail('请求异常!');
                    console.log(err);
                })
            })
        }
        };

    headerBorn = () => {
        for (let i = 0; i < 20; i++) {
            this.state.headerList.push({
                text: '头像'+(i+1),
                icon: require(`../../assets/images/头像${i+1}.png`) // 不能使用import
            })
        }
    };

    goBack = () => {
      this.props.history.go(-1);
    };

    getEdit = () => {
        reqGetEdit(store.getState().user._id).then( res => {
            const { code, message, messageBody } = res.data;
            console.log(messageBody);
            code === 0 && this.setState({
                user:messageBody,
                header: messageBody.header
            });
            code !== 0 && Toast.fail(message);
        }).catch( err => {
            Toast.fail('请求失败!');
        });
    };

    componentDidMount() {
        store.subscribe(this.storeChange);
        this.headerBorn();
        this.getEdit();
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { user, headerList } = this.state;
        return (
            <div>
                {
                    <List renderHeader={user.type === "laoban" ?() => '选择老板头像' : () => '选择大神头像'}>
                        <Grid data={headerList} activeStyle={false} onClick={this.headerSelect} />
                    </List>
                }
                <List renderHeader={() => '修改个人信息'}>
                    <Item>
                        <InputItem
                            {...getFieldProps('header')}
                            clear
                            placeholder={'请在上方选择个人头像'}
                            ref={el => this.autoFocusInst = el}
                            value={this.state.header}
                        >个人头像</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('username',
                                {   initialValue: user.username || undefined,
                                    rules: [{ required: true, message:'请输入个人用户名'}]
                                })}
                            clear
                            placeholder={'请输入个人用户名'}
                            ref={el => this.autoFocusInst = el}
                        >个人用户名</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('password',
                                {   initialValue: user.password || undefined,
                                    rules: [{ required: true, message:'请输入登录密码'}]
                                })}
                            clear
                            placeholder={'请输入登录密码'}
                            ref={el => this.autoFocusInst = el}
                            type="password"
                        >登录密码</InputItem>
                    </Item>
                    {
                        user.type === "laoban"? <Item>
                            <InputItem
                                {...getFieldProps('company',
                                    {   initialValue: user.company || undefined,
                                        rules: [{ required: true, message:'请输入老板公司'}]
                                    })}
                                clear
                                placeholder={'请输入老板公司'}
                                ref={el => this.autoFocusInst = el}
                            >老板公司</InputItem>
                        </Item> :''
                    }
                    <Item>
                        {
                            user.type === "laoban"? <InputItem
                                {...getFieldProps('post',
                                    {   initialValue: user.post || undefined,
                                        rules: [{ required: true, message:'请输入招聘职位'}]
                                    })}
                                clear
                                placeholder={'请输入招聘职位'}
                                ref={el => this.autoFocusInst = el}
                            >招聘职位</InputItem> : <InputItem
                                {...getFieldProps('post',
                                    {   initialValue: user.post || undefined,
                                        rules: [{ required: true, message:'请输入求职职位'}]
                                    })}
                                clear
                                placeholder={'请输入求职职位'}
                                ref={el => this.autoFocusInst = el}
                            >求职职位</InputItem>
                        }
                    </Item>
                    <Item>
                        {
                            user.type === "laoban"?
                                <InputItem
                                    {...getFieldProps('info',
                                        {   initialValue: user.info || undefined,
                                            rules: [{ required: true, message:'请输入招聘要求'}]
                                        })}
                                    clear
                                    placeholder={'请输入招聘要求'}
                                    ref={el => this.autoFocusInst = el}
                                >招聘要求</InputItem> : <InputItem
                                    {...getFieldProps('info',
                                        {   initialValue: user.info || undefined,
                                            rules: [{ required: true, message:'请输入自我介绍'}]
                                        })}
                                    clear
                                    placeholder={'请输入自我介绍'}
                                    ref={el => this.autoFocusInst = el}
                                >自我介绍</InputItem>
                        }
                    </Item>
                    {
                        user.type === "laoban"? <Item>
                            <InputItem
                                {...getFieldProps('salary',
                                    {   initialValue: user.salary || undefined,
                                        rules: [{ required: true, message:'请输入招聘月薪'}]
                                    })}
                                clear
                                placeholder={'请输入招聘月薪'}
                                ref={el => this.autoFocusInst = el}
                            >招聘月薪</InputItem>
                        </Item> : ''
                    }
                    <div>
                        <Button icon="check-circle-o" size="middle" type="primary" style={ {margin: '10px auto', width:'50%'}} onClick={this.Submit}>保存</Button>
                        <Button icon="cross-circle" size="middle" type="danger" style={ {margin: '10px auto', width:'50%'}} onClick={this.goBack}>返回</Button>
                        <WhiteSpace />
                    </div>
                </List>
            </div>
        )
    }
}
const wrapForm  = createForm()(EditPersonal);
export default connect(
    state => ({user: state.user}),
    {resetUser}
)(wrapForm)
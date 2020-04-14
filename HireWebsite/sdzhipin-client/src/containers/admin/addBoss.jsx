import {List, InputItem, Button, WhiteSpace, Grid, Toast} from 'antd-mobile';
import React, { Component } from 'react';
import { createForm } from 'rc-form';
import {reqAddInfo, reqPostEdit} from "../../api";
const Item = List.Item;
class AddBoss extends Component {

    state = {
        headerList: [],
        header: this.props.tag.state.bossObj.header || '',
        id: ''
    };

    handleClick = () => {

    };

    headerBorn = () => {
        for (let i = 0; i < 20; i++) {
            this.state.headerList.push({
                text: '头像'+(i+1),
                icon: require(`../../assets/images/头像${i+1}.png`) // 不能使用import
            })
        }
    };

    headerSelect = (menu) => {
        const header = menu.text;
        this.setState({
            header
        });
    };

    goBack = () => {
        this.props.form.resetFields();
        this.props.tag.setState({
            showForm: false
        });
    };

    Submit = () => {
        const { tag } = this.props;
        if (!tag.state.addOrEdit){
            this.props.form.validateFields( ( err, values) => {
                values.header = this.state.header;
                const { header, username, password, info, post, salary, company } = values;
                if (!header || !username || !password || !info || !post || !salary || !company){
                    return  Toast.info('请填写所有表单项!');
                }
                values.type = 'laoban';
                reqAddInfo(values).then( res => {
                    const { code, message } = res.data;
                    if ( code === 0){
                        Toast.success(message);
                        this.props.form.resetFields();
                        tag.setState({
                            showForm: false,
                        }, () => {
                            tag.getAuthority(tag.state.showFlag);
                        })
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
                values.type = 'laoban';
                values._id = this.state.id;
                reqPostEdit(values).then( res => {
                    const { code, message } = res.data;
                    if ( code === 0){
                        Toast.success(message);
                        this.props.form.resetFields();
                        tag.setState({
                            showForm: false,
                        }, () => {
                            tag.getAuthority(tag.state.showFlag);
                        })
                    }
                    code !== 0 && Toast.fail(message);
                }).catch( err => {
                    Toast.fail('请求异常!');
                    console.log(err);
                })
            })
        }
    };

    componentWillMount() {
        const { tag } = this.props;
        tag.state.bossObj._id && this.setState({
            id: tag.state.bossObj._id
        });
    }

    componentDidMount() {
        this.headerBorn();
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { headerList } = this.state;
        const { tag } = this.props;
        return (
            <div>
                <List renderHeader={() => '选择老板头像'}>
                    <Grid data={headerList} activeStyle={false} onClick={this.headerSelect} />
                </List>
                <List renderHeader={() => '添加老板'}>
                    <Item>
                        <InputItem
                            {...getFieldProps('header')}
                            clear
                            placeholder={'请在上方选择老板头像'}
                            ref={el => this.autoFocusInst = el}
                            value={this.state.header}
                        >老板头像</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('username',
                                {   initialValue: tag.state.bossObj.username || undefined,
                                    rules: [{ required: true, message:'请输入老板用户名'}]
                                })}
                            clear
                            placeholder={'请输入老板用户名'}
                            ref={el => this.autoFocusInst = el}
                        >老板用户名</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('password',
                                {   initialValue: tag.state.bossObj.password || undefined,
                                    rules: [{ required: true, message:'请输入登录密码'}]
                                })}
                            clear
                            placeholder={'请输入登录密码'}
                            ref={el => this.autoFocusInst = el}
                            type="password"
                        >登录密码</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('company',
                                {   initialValue: tag.state.bossObj.company || undefined,
                                    rules: [{ required: true, message:'请输入老板公司'}]
                                })}
                            clear
                            placeholder={'请输入老板公司'}
                            ref={el => this.autoFocusInst = el}
                        >老板公司</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('post',
                                {   initialValue: tag.state.bossObj.post || undefined,
                                    rules: [{ required: true, message:'请输入老板招聘职位'}]
                                })}
                            clear
                            placeholder={'请输入老板招聘职位'}
                            ref={el => this.autoFocusInst = el}
                        >招聘职位</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('info',
                                {   initialValue: tag.state.bossObj.info || undefined,
                                    rules: [{ required: true, message:'请输入招聘要求'}]
                                })}
                            clear
                            placeholder={'请输入招聘要求'}
                            ref={el => this.autoFocusInst = el}
                        >招聘要求</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('salary',
                                {   initialValue: tag.state.bossObj.salary || undefined,
                                    rules: [{ required: true, message:'请输入招聘月薪'}]
                                })}
                            clear
                            placeholder={'请输入招聘月薪'}
                            ref={el => this.autoFocusInst = el}
                        >招聘月薪</InputItem>
                    </Item>
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
const formWrapper = createForm()(AddBoss);
export default formWrapper;
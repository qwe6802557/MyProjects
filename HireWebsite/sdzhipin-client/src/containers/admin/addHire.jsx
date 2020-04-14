import {List, InputItem, Button, WhiteSpace, Grid, Toast} from 'antd-mobile';
import React, { Component } from 'react';
import { createForm } from 'rc-form';
import {reqAddInfo, reqPostEdit} from "../../api";
const Item = List.Item;
class AddHire extends Component {

    state = {
        headerList: [],
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

    Submit = () => {
        const { tag } = this.props;
        if (!tag.state.addOrEdit){
            this.props.form.validateFields( ( err, values) => {
                const { username, password, info, post, salary, company } = values;
                if (!salary || !username || !password || !info || !post || !company){
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
                const { username, password, info, post, salary, company } = values;
                if (!salary || !username || !password || !info || !post || !company){
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

    goBack = () => {
        this.props.form.resetFields();
        this.props.tag.setState({
            showForm: false
        });
    };

    componentWillMount() {
        const { tag } = this.props;
        tag.state.hireObj._id && this.setState({
            id: tag.state.hireObj._id
        });
    }

    componentDidMount() {
        this.headerBorn();
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { tag } = this.props;
        return (
            <div>
                <List renderHeader={() => '添加招聘信息'}>
                    <Item>
                        <InputItem
                            {...getFieldProps('username',
                                {   initialValue: tag.state.hireObj.username || undefined,
                                    rules: [{ required: true, message:'请输入发布人(老板用户名)'}]
                                })}
                            clear
                            placeholder={'请输入发布人(老板用户名)'}
                            ref={el => this.autoFocusInst = el}
                        >发布人</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('password',
                                {   initialValue: tag.state.hireObj.password || undefined,
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
                                {   initialValue: tag.state.hireObj.company || undefined,
                                    rules: [{ required: true, message:'请输入招聘公司'}]
                                })}
                            clear
                            placeholder={'请输入招聘公司'}
                            ref={el => this.autoFocusInst = el}
                        >招聘公司</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('post',
                                {   initialValue: tag.state.hireObj.post || undefined,
                                    rules: [{ required: true, message:'请输入招聘职位'}]
                                })}
                            clear
                            placeholder={'请输入招聘职位'}
                            ref={el => this.autoFocusInst = el}
                        >招聘职位</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('info',
                                {   initialValue: tag.state.hireObj.info || undefined,
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
                                {   initialValue: tag.state.hireObj.salary || undefined,
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
const formWrapper = createForm()(AddHire);
export default formWrapper;
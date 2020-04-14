import {List, InputItem, Button, WhiteSpace, Grid, TextareaItem, Toast} from 'antd-mobile';
import React, { Component } from 'react';
import { createForm } from 'rc-form';
import { reqAddInfo, reqPostEdit } from "../../api";

const Item = List.Item;
class AddBigGod extends Component {

    state = {
        headerList: [],
        header: this.props.tag.state.bigGodObj.header || '',
        id: ''
    };

    handleClick = () => {

    };

    Submit = () => {
        const { tag } = this.props;
        if (!tag.state.addOrEdit){
            this.props.form.validateFields( ( err, values) => {
                values.header = this.state.header;
                const { header, username, password, info, post } = values;
                if (!header || !username || !password || !info || !post){
                    return  Toast.info('请填写所有表单项!');
                }
                values.type = 'dashen';
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
                values.type = 'dashen';
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

    componentWillMount() {
        const { tag } = this.props;
        tag.state.bigGodObj._id && this.setState({
            id: tag.state.bigGodObj._id
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
                <List renderHeader={() => '选择大神头像'}>
                    <Grid data={headerList} activeStyle={false} onClick={this.headerSelect} />
                </List>
                <List renderHeader={() => '添加大神'}>
                    <Item>
                        <InputItem
                            {...getFieldProps('header')}
                            clear
                            placeholder={'请在上方选择大神头像'}
                            ref={el => this.autoFocusInst = el}
                            value={this.state.header}
                        >大神头像</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('username',
                                {   initialValue: tag.state.bigGodObj.username || undefined,
                                    rules: [{ required: true, message:'请输入大神用户名'}]
                                })}
                            clear
                            placeholder={'请输入大神用户名'}
                            ref={el => this.autoFocusInst = el}
                        >大神用户名</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('password',
                                {   initialValue: tag.state.bigGodObj.password || undefined,
                                    rules: [{ required: true, message:'请输入大神密码'}]
                                })}
                            clear
                            placeholder={'请输入大神密码'}
                            ref={el => this.autoFocusInst = el}
                            type="password"
                        >大神密码</InputItem>
                    </Item>
                    <Item>
                        <InputItem
                            {...getFieldProps('post',
                                {   initialValue: tag.state.bigGodObj.post || undefined,
                                    rules: [{ required: true, message:'请输入大神求职岗位'}]
                                })}
                            clear
                            placeholder={'请输入大神求职岗位'}
                            ref={el => this.autoFocusInst = el}
                        >求职岗位</InputItem>
                    </Item>
                    <Item>
                        <TextareaItem
                            {...getFieldProps('info',
                                {   initialValue: tag.state.bigGodObj.info || undefined,
                                    rules: [{ required: true, message:'请输入大神介绍'}]
                                })}
                            title={'大神介绍'}
                            clear
                            placeholder={'请输入大神介绍'}
                            ref={el => this.autoFocusInst = el}
                        >大神介绍</TextareaItem>
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
const formWrapper = createForm()(AddBigGod);
export default formWrapper;
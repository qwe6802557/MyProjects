import React, { Component } from "react";
import { Icon, List, InputItem, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';
import './editAddress.less';

const { Item } = List;
class Help extends Component{


    render() {

        const { getFieldProps, getFieldError } = this.props.form;

        return (<div id="editAddress">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>编辑地址</span>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <form>
                        <List

                        >
                            <InputItem
                                {...getFieldProps('name', {
                                    // initialValue: 'little ant',
                                    rules: [
                                        { required: true, message: '请输入收货人姓名' },
                                    ],
                                })}
                                clear
                                error={!!getFieldError('name')}
                                onErrorClick={() => {
                                    alert(getFieldError('name').join('、'));
                                }}
                                placeholder="请输入收货人姓名"
                            >收货人姓名</InputItem>
                            <InputItem
                                {...getFieldProps('phone', {
                                    // initialValue: 'little ant',
                                    rules: [
                                        { required: true, message: '请输入手机号码' },
                                    ],
                                })}
                                clear
                                error={!!getFieldError('phone')}
                                onErrorClick={() => {
                                    alert(getFieldError('phone').join('、'));
                                }}
                                placeholder="请输入手机号码"
                            >手机号码</InputItem>
                            <InputItem
                                {...getFieldProps('phone', {
                                    // initialValue: 'little ant',
                                    rules: [
                                        { required: true, message: '请输入所在地区' },
                                    ],
                                })}
                                clear
                                error={!!getFieldError('phone')}
                                onErrorClick={() => {
                                    alert(getFieldError('phone').join('、'));
                                }}
                                placeholder="请输入所在地区"
                            >所在地区</InputItem>
                            <InputItem
                                {...getFieldProps('phone', {
                                    // initialValue: 'little ant',
                                    rules: [
                                        { required: true, message: '请输入详细地址' },
                                    ],
                                })}
                                clear
                                error={!!getFieldError('phone')}
                                onErrorClick={() => {
                                    alert(getFieldError('phone').join('、'));
                                }}
                                placeholder="请请输入详细地址"
                            >详细地址</InputItem>
                        </List>
                    </form>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <form>
                        <List

                        >
                            <Item
                                extra={<Switch {...getFieldProps('1', { initialValue: true, valuePropName: 'checked' })} />}
                            >设为默认地址</Item>
                        </List>
                    </form>
                </div>
            </div>
            <div className="content-button">
                <span>保存</span>
            </div>
        </div>);
    }
}

const wrapForm = createForm()(Help);

export default wrapForm;
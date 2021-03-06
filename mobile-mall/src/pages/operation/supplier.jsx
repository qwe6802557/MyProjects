import React, { Component } from "react";
import {Checkbox, Icon} from 'antd-mobile';
import './supplier.less';
import {reqSaveSupplier} from "../../api/main";
const CheckboxItem = Checkbox.CheckboxItem;

export default class Operation extends Component{

    state = {
        userName: '',
        phone: '',
        weChat: '',
        projectName: ''
    };

    changeName (e) {
        this.setState({
            userName: e.target.value
        });
    }

    changePhone (e) {
        this.setState({
            phone: e.target.value
        });
    }

    changeWechat (e) {
        this.setState({
            weChat: e.target.value
        });
    }

    changeProduct (e) {
        this.setState({
            projectName: e.target.value
        });
    }

    async handleSupply () {
        const { userName, phone, weChat, projectName} = this.state;

        const result = await reqSaveSupplier({
            userName,
            phone,
            weChat,
            projectName,
            terminalType: 1
        });

        console.log(result.data);
    }

    render() {
        return (<div id="supplier">
            <div className="operation-top">
                <div className="help-head">
                    <div className="arrow-left">
                        <Icon type="left"/>
                    </div>
                    <span>立即申请厂家供应商</span>
                </div>
            </div>
            <div className="help-content" style={{ top: '2.5rem'}}>
                <div className="content-p">
                    <div className="p-title">
                        <h1>欢迎加入 <span style={{color: '#569AFF'}}>合一家族</span>，请填写申请信息</h1>
                    </div>
                    <div className="form-area">
                        <div className="realName">
                            <input type="text" placeholder="请输入您的贵姓" onChange={this.changeName.bind(this)}/>
                        </div>
                        <div className="realName">
                            <input type="text" placeholder="请输入您的手机号" onChange={this.changePhone.bind(this)}/>
                        </div>
                        <div className="realName">
                            <input type="text" placeholder="请输入您的微信号" onChange={this.changeWechat.bind(this)}/>
                        </div>
                        <div className="realName">
                            <input type="text" placeholder="请输入项目产品" onChange={this.changeProduct.bind(this)}/>
                        </div>
                        <div className="confirm-read">
                            <CheckboxItem onChange={() => this.onChange}>我已经阅读并了解<span style={{color: '#80B1FF'}}>【区域代理申请协议】</span></CheckboxItem>
                        </div>
                        <div className="content-button">
                            <span onClick={this.handleSupply.bind(this)}>立即申请</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="help-content" style={{ top: '10.9rem'}}>
                <div className="content-p">
                    <div className="p-title" style={{justifyContent: 'flex-start'}}>
                        <h1 style={{paddingBottom: '.25rem', borderBottom: '1px solid rgba(204,204,204,1)', width: '100%'}}><img src={require('@src/public/img/king.png')} alt="介绍" style={{
                            width: '.44rem',
                            height: '.38rem',
                            marginTop: 0,
                            marginRight: '.15rem'
                        }}/>特权介绍</h1>
                    </div>
                    <p>特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍文字内容特权介绍</p>
                </div>
            </div>
        </div>);
    }
}
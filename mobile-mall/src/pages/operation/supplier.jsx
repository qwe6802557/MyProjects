import React, { Component } from "react";
import {Checkbox, Icon} from 'antd-mobile';
import './supplier.less';
const CheckboxItem = Checkbox.CheckboxItem;

export default class Operation extends Component{
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
                            <input type="text" placeholder="请输入您的贵姓"/>
                        </div>
                        <div className="realName">
                            <input type="text" placeholder="请输入您的手机号"/>
                        </div>
                        <div className="realName">
                            <input type="text" placeholder="请输入您的微信号"/>
                        </div>
                        <div className="realName">
                            <input type="text" placeholder="请输入项目产品"/>
                        </div>
                        <div className="confirm-read">
                            <CheckboxItem onChange={() => this.onChange}>我已经阅读并了解<span style={{color: '#80B1FF'}}>【区域代理申请协议】</span></CheckboxItem>
                        </div>
                        <div className="content-button">
                            <span>立即申请</span>
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
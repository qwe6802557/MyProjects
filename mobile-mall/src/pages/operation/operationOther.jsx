import React, { Component } from "react";
import { Checkbox } from 'antd-mobile';
import './operationOther.less';
const CheckboxItem = Checkbox.CheckboxItem;

export default class Operation extends Component{
    render() {
        return (<div id="operationOther">
            <div className="operation-top">
                <div className="help-head">
                    <div className="arrow-left">
                        ＜
                    </div>
                    <span>立即成为合伙人</span>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <div className="p-title">
                        <img src={require('@src/public/img/钻石1.png')} alt="图片"/>
                        <h1>合伙人专属权益</h1>
                    </div>
                    <div className="p-center">
                        <div className="center-box">
                            <div className="count-money">会员5折起</div>
                            <div className="count-vip">全场会员价</div>
                        </div>
                        <div className="center-box">
                            <div className="count-money">下单减5元</div>
                            <div className="count-vip">新会员特效</div>
                        </div>
                        <div className="center-box">
                            <div className="count-money">每月50元劵</div>
                            <div className="count-vip">会员专区可用</div>
                        </div>
                    </div>
                    <div className="p-center">
                        <div className="center-box">
                            <div className="count-money">贵必赔</div>
                            <div className="count-vip">买贵赔双倍差价</div>
                        </div>
                        <div className="center-box">
                            <div className="count-money">差必赔</div>
                            <div className="count-vip">买差必赔有保障</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="help-content" style={{ top: '6.5rem'}}>
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
                            <input type="text" placeholder="代理类型"/>
                            <div className="check-box-area">
                                <CheckboxItem onChange={() => this.onChange}>
                                    省级
                                </CheckboxItem>
                                <CheckboxItem onChange={() => this.onChange}>
                                    市级
                                </CheckboxItem>
                                <CheckboxItem onChange={() => this.onChange}>
                                    区级
                                </CheckboxItem>
                            </div>
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
            <div className="help-content" style={{ top: '15.3rem'}}>
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
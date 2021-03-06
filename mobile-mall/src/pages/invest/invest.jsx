import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './invest.less';
export default class Help extends Component{
    render() {
        return (<div id="invest">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>充值</span>
            </div>
            <div className="content-top">
                <div className="top-left">
                    <span>我的余额（元）</span>
                    <h3>13456.00</h3>
                </div>
                <div className="top-right">
                    <div className="to-money">
                        <img src={require('@src/public/img/提现.png')} alt="提现"/>
                        <span>充值记录</span>
                        <Icon type="right" color={'#fff'}/>
                    </div>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <span className="invest-title">充值金额</span>
                    <div className="invest-count">
                        <h4>¥</h4>
                        <input type="text"/>
                    </div>
                    <p>单笔最低100.00元，每日最多10000.00元</p>
                    <div className="content-button">
                        <span>充值</span>
                    </div>
                </div>
            </div>
            <div className="help-content" style={{top: '7.7rem'}}>
                <div className="content-p">
                    <span className="invest-title">请选择充值方式</span>
                    <div className="invest-methods">
                        <div className="each-method">
                            <img src={require('@src/public/img/wechat.png')} alt="微信"/>
                            微信
                        </div>
                        <div className="each-method">
                            <img src={require('@src/public/img/zhifubao.png')} alt="微信"/>
                            支付宝
                        </div>
                        <div className="each-method">
                            <img src={require('@src/public/img/card.png')} alt="银行卡"/>
                            银行卡
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
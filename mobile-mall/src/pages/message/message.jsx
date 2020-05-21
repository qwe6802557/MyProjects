import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './message.less';
export default class Help extends Component{
    render() {
        return (<div id="message">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>系统消息</span>
            </div>
            <div className="help-content">
                <div className="content-title">
                    2019-05-22 16:37:36
                </div>
                <div className="content-p">
                    <h3><img src={require('@src/public/img/voice.png')} alt="voice"/><span>招商奖励通知</span></h3>
                    <p>您的账户2102232199跟随信号测试信号平仓卖单0.01手＠ 1273.34亏损-1.59;信号订单...</p>
                    <div className="content-button">
                        <span className="toDetail">查看详情</span><span>＞</span>
                    </div>
                </div>
            </div>
            <div className="help-content">
                <div className="content-title">
                    2019-05-22 16:37:36
                </div>
                <div className="content-p">
                    <h3><img src={require('@src/public/img/voice.png')} alt="voice"/><span>提现通知</span></h3>
                    <p>您的账户2102232199跟随信号测试信号平仓卖单0.01手＠ 1273.34亏损-1.59;信号订单...</p>
                    <div className="content-button">
                        <span className="toDetail">查看详情</span><span>＞</span>
                    </div>
                </div>
            </div>
            <div className="help-content">
                <div className="content-title">
                    2019-05-22 16:37:36
                </div>
                <div className="content-p">
                    <h3><img src={require('@src/public/img/voice.png')} alt="voice"/><span>新粉丝通知</span></h3>
                    <p>您的账户2102232199跟随信号测试信号平仓卖单0.01手＠ 1273.34亏损-1.59;信号订单...</p>
                    <div className="content-button">
                        <span className="toDetail">查看详情</span><span>＞</span>
                    </div>
                </div>
            </div>
        </div>);
    }
}
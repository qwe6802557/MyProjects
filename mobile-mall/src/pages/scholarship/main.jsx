import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './main.less';
export default class Help extends Component{
    render() {
        return (<div id="main">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>奖学金</span>
            </div>
            <div className="main-top">
                <img src={require('@src/public/img/vip-avatar.png')} alt="头像" style={{marginTop: '.1rem'}}/>
                <div className="message">
                    <p>悬崖边的金鱼公主</p>
                    <span>累计领：2天</span>
                </div>
                <div className="top-right">
                    <img src={require('@src/public/img/toMoney.png')} alt="奖学金"/>
                    <span>奖学金明细</span>
                    <Icon type="right"/>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <h1>我的奖学金</h1>
                    <h4>06 <span style={{fontSize: '.3rem'}}>+20</span></h4>
                    <div className="constant">
                        <span className="no-constant">连续领2天</span>
                    </div>
                    <div className="days-count">
                        <div className="each-day">
                            <img src={require('@src/public/img/red-active.png')} alt="图片"/>
                            <span>第一天</span>
                        </div>
                        <div className="each-day">
                            <img src={require('@src/public/img/red-active.png')} alt="图片"/>
                            <span>第二天</span>
                        </div>
                        <div className="each-day">
                            <img src={require('@src/public/img/red-gray.png')} alt="图片"/>
                            <span>第三天</span>
                        </div>
                        <div className="each-day">
                            <img src={require('@src/public/img/red-gray.png')} alt="图片"/>
                            <span>第四天</span>
                        </div>
                        <div className="each-day">
                            <img src={require('@src/public/img/red-gray.png')} alt="图片"/>
                            <span>第五天</span>
                        </div>
                        <div className="each-day">
                            <img src={require('@src/public/img/red-gray.png')} alt="图片"/>
                            <span>第六天</span>
                        </div>
                        <div className="each-day">
                            <img src={require('@src/public/img/red-gray.png')} alt="图片"/>
                            <span>第七天</span>
                        </div>
                    </div>
                    <div className="content-button">
                        <span>挑战连续看一年，领取4000元奖学金</span>
                    </div>
                    <div className="rule-information">
                        <span>规则说明</span>
                        <Icon type="right"/>
                    </div>
                </div>
            </div>
        </div>);
    }
}
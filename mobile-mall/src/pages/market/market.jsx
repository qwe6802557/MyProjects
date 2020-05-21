import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './market.less';
export default class Help extends Component{
    render() {
        return (<div id="market">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>市场代言</span>
            </div>
            <div className="market-top">
                <div className="top-tab">
                    <div className="my-care active-care">
                        <img src={require('@src/public/img/myCare.png')} alt="我的关注"/>
                        <span>我关注的</span>
                    </div>
                    <div className="care-split"/>
                    <div className="care-me">
                        <img src={require('@src/public/img/careMe.png')} alt="关注我的"/>
                        <span>关注我的</span>
                    </div>
                </div>
            </div>
            <div className="market-content">
               {/*<div className="market-empty">
                   <img src={require('@src/public/img/market-empty.png')} alt="无关注"/>
                   <span className="no-care">暂无关注</span>
                   <span className="refresh-button">
                       刷新
                   </span>
               </div>*/}
               <div className="content-box">
                   <div className="top-bar">
                       <img src={require('@src/public/img/avatar.png')} alt="头像"/>
                       <div className="bar-message">
                           <h4>贴身短打：王豪坤</h4>
                           <span className="gray-span" style={{fontSize: '.26rem'}}>级别：合作商</span>
                       </div>
                       <span className="phone-num gray-span">13796541236</span>
                   </div>
                   <div className="bottom-bar">
                       <div className="bottom-left">
                           <img src={require('@src/public/img/money.png')} alt="金钱"/>
                           <span>代言费：<span style={{color: '#5599FF'}}>+0.99</span></span>
                       </div>
                       <div className="bottom-split"/>
                       <div className="bottom-right">
                           <img src={require('@src/public/img/care.png')} alt="金钱"/>
                           <span>粉丝 1 位</span>
                       </div>
                   </div>
               </div>
            </div>
            <div className="refresh">
                <img src={require('@src/public/img/refresh.png')} alt="下拉刷新"/>
                <span>下拉加载更多</span>
            </div>
        </div>);
    }
}
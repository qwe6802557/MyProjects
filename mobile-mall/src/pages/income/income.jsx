import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './income.less';
export default class Income extends Component{
    render() {
        return (<div id="income">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>招商收益</span>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <p className="p-title">编号：C202003101237385637196201984</p>
                    <p><img src={require('@src/public/img/形状 2@2x.png')} alt="图片"/>奖励明细：很好的课程点赞</p>
                    <p><img src={require('@src/public/img/金额@2x.png')} alt="图片"/>奖励类型：区县合伙人区域课程分成</p>
                    <p><img src={require('@src/public/img/用户@2x.png')} alt="图片"/>购买用户：禅拍养生：王海朋（惠勇）</p>
                    <p><img src={require('@src/public/img/形状 2 拷贝@2x.png')} alt="图片"/>佣金比例：10%</p>
                    <p><img src={require('@src/public/img/手续费 (1)@2x.png')} alt="图片"/>佣金金额：0.10元</p>
                    <p><img src={require('@src/public/img/形状 2 拷贝@2x.png')} alt="图片"/>奖励时间:2020-03-13  01:05:31</p>
                    <p><img src={require('@src/public/img/危险的闪电 拷贝@2x.png')} alt="图片"/>奖励状态:已提现</p>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <p className="p-title">编号：C202003101237385637196201984</p>
                    <p><img src={require('@src/public/img/形状 2@2x.png')} alt="图片"/>奖励明细：很好的课程点赞</p>
                    <p><img src={require('@src/public/img/金额@2x.png')} alt="图片"/>奖励类型：区县合伙人区域课程分成</p>
                    <p><img src={require('@src/public/img/用户@2x.png')} alt="图片"/>购买用户：禅拍养生：王海朋（惠勇）</p>
                    <p><img src={require('@src/public/img/形状 2 拷贝@2x.png')} alt="图片"/>佣金比例：10%</p>
                    <p><img src={require('@src/public/img/手续费 (1)@2x.png')} alt="图片"/>佣金金额：0.10元</p>
                    <p><img src={require('@src/public/img/形状 2 拷贝@2x.png')} alt="图片"/>奖励时间:2020-03-13  01:05:31</p>
                    <p><img src={require('@src/public/img/危险的闪电 拷贝@2x.png')} alt="图片"/>奖励状态:已提现</p>
                </div>
            </div>
            <div className="refresh">
                <img src={require('@src/public/img/refresh.png')} alt="下拉刷新"/>
                <span>下拉加载更多</span>
            </div>
        </div>);
    }
}
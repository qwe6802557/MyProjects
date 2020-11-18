import React, { Component } from "react";
import './vip.less';
export default class Vip extends Component{
    render() {
        return (<div id="vip">
            <div className="operation-top">
                <div className="help-head">
                    <div className="arrow-left" onClick={() => this.props.history.go(-1)}>
                        ＜
                    </div>
                    <span>立即成为VIP</span>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <div className="p-title">
                        <img src={require('@src/public/img/钻石.png')} alt="图片"/>
                        <h1>VIP专属权益</h1>
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
                    <div className="p-title" style={{marginTop:'.4rem'}}>
                        <img src={require('@src/public/img/形状 2.png')} alt="图片"/>
                        <h1>会员类型</h1>
                    </div>
                    <div className="vip-type">
                        <div className="type-card active-card">
                            <span>金牌VIP</span>
                            <span className="type-price">¥365</span>
                            <span className="type-old-price">¥365</span>
                            <span className="whole-life">终身</span>
                        </div>
                        <div className="type-card">
                            <span>钻石VIP</span>
                            <span className="type-price">¥666</span>
                            <span className="type-old-price">¥999</span>
                            <span className="whole-life">终身</span>
                        </div>
                        <div className="type-card">
                            <span>合作商</span>
                            <span className="type-price">¥299</span>
                            <span className="type-old-price">¥999</span>
                            <span className="whole-life">终身</span>
                        </div>
                    </div>
                    <div className="vip-button">
                        <span>立即开通</span>
                    </div>
                </div>
            </div>
        </div>);
    }
}
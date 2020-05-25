import React, { Component } from "react";
import './center.less';

export default class Help extends Component{
    render() {
        return (<div id="vip-center">
            <div className="help-head">
                <span>会员中心</span>
                <img src={require('@src/public/img/setting.png')} alt="vip" style={{marginTop: '.2rem'}}/>
            </div>
            <div className="help-content">
                <div className="help-first-part">
                    <div className="first-top">
                        <div className="top-avatar">
                            <img src={require('@src/public/img/avatar.png')} alt="头像"/>
                            <h5>禅拍养生</h5>
                            <span>级别：合作商</span>
                        </div>
                        <div className="level-up">
                            升级
                        </div>
                    </div>
                    <div className="first-bottom">
                        <div className="bottom-box">
                            <span>0</span>
                            <span>课程评价</span>
                        </div>
                        <div className="bottom-box">
                            <span>2</span>
                            <span>已买课程</span>
                        </div>
                        <div className="bottom-box">
                            <span>10</span>
                            <span>优惠卷</span>
                        </div>
                        <div className="bottom-box">
                            <span>100</span>
                            <span>奖学金</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="help-banner">
                <div className="banner-one">
                    <img src={require('@src/public/img/12345.png')} alt="代言"/>
                      <div className="banner-content">
                          <h3>市场收益</h3>
                          <span className="split-market"/>
                          <p>我的粉丝 10 位</p>
                      </div>
                    <img src={require('@src/public/img/first.png')} alt="箭头" style={{width: '.24rem', height: '.24rem'}} className="arrow"/>
                </div>
                <div className="banner-one" style={{left: '2.55rem'}}>
                    <img src={require('@src/public/img/123.png')} alt="代言"/>
                    <div className="banner-content">
                        <h3 style={{color: '#619BFA'}}>代言收益</h3>
                        <span className="split-market" style={{background: '#619BFA'}}/>
                        <p style={{color: '#619BFA'}}>999.00</p>
                    </div>
                    <img src={require('@src/public/img/second-arrow.png')} alt="箭头" style={{width: '.24rem', height: '.24rem'}} className="arrow"/>
                </div>
                <div className="banner-one" style={{left: '4.8rem'}}>
                    <img src={require('@src/public/img/1234.png')} alt="代言"/>
                    <div className="banner-content">
                        <h3 style={{color: '#33CD8D'}}>我的余额</h3>
                        <span className="split-market" style={{background: '#33CD8D'}}/>
                        <p style={{color: '#33CD8D'}}>999.00</p>
                    </div>
                    <img src={require('@src/public/img/third-arrow.png')} alt="箭头" style={{width: '.24rem', height: '.24rem'}} className="arrow"/>
                </div>
            </div>
            <div className="help-service">
                <div className="service-content">
                    <h6>我的服务</h6>
                    <div className="service-box">
                       <div className="each-box">
                           <img src={require('@src/public/img/11.png')} alt="我的服务器"/>
                           <span>商城订单</span>
                       </div>
                        <div className="each-box">
                            <img src={require('@src/public/img/22.png')} alt="我的服务器"/>
                            <span>我的购物车</span>
                        </div>
                        <div className="each-box">
                            <img src={require('@src/public/img/33.png')} alt="我的服务器"/>
                            <span>收货地址管理</span>
                        </div>
                        <div className="each-box">
                            <img src={require('@src/public/img/44.png')} alt="我的服务器"/>
                            <span>成为商家</span>
                        </div>
                        <div className="each-box">
                            <img src={require('@src/public/img/55.png')} alt="我的服务器"/>
                            <span>成为合伙人</span>
                        </div>
                        <div className="each-box">
                            <img src={require('@src/public/img/66.png')} alt="我的服务器"/>
                            <span>成为厂家供应商</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="help-banner-other">
                <img src={require('@src/public/img/banner10.png')}  alt="循环"/>
            </div>
        </div>);
    }
}
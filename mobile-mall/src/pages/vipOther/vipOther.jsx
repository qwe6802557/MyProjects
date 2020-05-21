import React, { Component } from "react";
import './vipOther.less';
export default class Vip extends Component{
    render() {
        return (<div id="vip-other">
            <div className="operation-top">
                <div className="help-head">
                    <span>VIP</span>
                </div>
                <div className="p-title">
                    <img src={require('@src/public/img/钻石.png')} alt="图片"/>
                    <h1>开通会员尊享更多权益</h1>
                </div>
                <p>开通钻石会员预计年均可省1299元/年</p>
                <div className="main-content">
                    <div className="main-first">
                        <img src={require('@src/public/img/vip-avatar.png')} alt="图片"/>
                        <div className="content-center">
                            <p>禅拍养生：王海朋（惠勇）</p>
                            <span>有效期至2020-11-21</span>
                        </div>
                        <div className="content-right">
                            <p>合作商</p>
                        </div>
                    </div>
                    <div className="main-second">
                        <div className="second-box">
                            <div className="box-title">
                                <span style={{fontSize: '.50rem', fontWeight: 'bold'}}>79</span>
                                <span style={{fontSize: '.40rem'}}>.35元</span>
                            </div>
                            <div className="box-bottom">
                                累计已省
                            </div>
                        </div>
                        <img src={require('@src/public/img/split-vip.png')} alt="分割线"/>
                        <div className="second-box">
                            <div className="box-title">
                                <span style={{fontSize: '.50rem', fontWeight: 'bold'}}>79</span>
                                <span style={{fontSize: '.3rem'}}>.35元</span>
                            </div>
                            <div className="box-bottom">
                                累计已赚
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coupon">
                <h2>专享优惠券</h2>
                <span>本月剩余可领 4 张</span>
                <div className="coupon-bottom">
                    <img src={require('@src/public/img/10.png')} alt="10元"/>
                    <img src={require('@src/public/img/10.png')} alt="10元"/>
                    <img src={require('@src/public/img/10.png')} alt="10元"/>
                </div>
            </div>
            <div className="coupon" style={{marginTop: '0'}}>
               <div className="coupon-header">
                  <div className="header-left">
                      <h2>专享特价课程</h2>
                      <span>超低价格，每月更新</span>
                  </div>
                   <span style={{
                       flex: 1,
                       textAlign: 'right',
                       fontSize:'.24rem',
                       fontWeight: 500,
                       color:'rgba(152,152,152,1)'
                   }}>更多＞</span>
               </div>
                <div className="coupon-bottom">
                   <div className="bottom-box">
                       <img src={require('@src/public/img/show.png')} alt="图片"/>
                       <span className="play-video"><img src={require('@src/public/img/形状 1578.png')} alt="图片"/></span>
                       <span style={{color: '#333333', fontSize: '.28rem', fontWeight: 'bold'}}>中国古典宫廷御用武...</span>
                       <div className="box-price">
                           <span className="newPrice" style={{
                               fontSize:'.28rem',
                               fontWeight:'800',
                               color: 'rgba(216,164,90,1)'
                           }}>￥0.00</span>
                           <span className="each-class" style={{
                               fontSize: '.22rem',
                               fontWeight: 500,
                               color: 'rgba(191,191,191,1)',
                               marginLeft: '.1rem'
                           }}>/每节</span>
                           <span className="oldPrice" style={{
                               fontSize: '.22rem',
                               fontWeight: 500,
                               color: 'rgba(191,191,191,1)',
                               textDecoration: 'line-through',
                               flex:1,
                               textAlign: 'right'
                           }}>￥398.00</span>
                       </div>
                   </div>
                    <div className="bottom-box">
                        <img src={require('@src/public/img/show.png')} alt="图片"/>
                        <span className="play-video"><img src={require('@src/public/img/形状 1578.png')} alt="图片"/></span>
                        <span style={{color: '#333333', fontSize: '.28rem', fontWeight: 'bold'}}>中国古典宫廷御用武...</span>
                        <div className="box-price">
                           <span className="newPrice" style={{
                               fontSize:'.28rem',
                               fontWeight:'800',
                               color: 'rgba(216,164,90,1)'
                           }}>￥0.00</span>
                            <span className="each-class" style={{
                                fontSize: '.22rem',
                                fontWeight: 500,
                                color: 'rgba(191,191,191,1)',
                                marginLeft: '.1rem'
                            }}>/每节</span>
                            <span className="oldPrice" style={{
                                fontSize: '.22rem',
                                fontWeight: 500,
                                color: 'rgba(191,191,191,1)',
                                textDecoration: 'line-through',
                                flex:1,
                                textAlign: 'right'
                            }}>￥398.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vip-button">
                <span>立即升级</span>
            </div>
        </div>);
    }
}
import React, { Component } from "react";
import { Tabs, WhiteSpace,  Icon } from 'antd-mobile';
import './order.less';
export default class Help extends Component{
    render() {

        const tabs = [
            { title: '全部' },
            { title: '待付款' },
            { title: '待发货' },
            { title: '待收货' },
            { title: '已完成' },
        ];

        const TabExample = () => (
            <div>
                <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{  backgroundColor: '#F6F6F6' }}>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status">待付款</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                               <p>疼痛速解养护方案10次1疗程</p>
                                               <div className="right-last">
                                                   <span className="order-price">￥59.90</span>
                                                   <span>×1</span>
                                               </div>
                                           </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>取消订单</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">支付订单</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status">待付款</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>取消订单</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">支付订单</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6'}}>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status">待付款</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>取消订单</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">支付订单</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status">待付款</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>取消订单</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">支付订单</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6' }}>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status" style={{color: '#5599FF'}}>待发货</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>取消订单</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">支付订单</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status" style={{color: '#5599FF'}}>待发货</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>取消订单</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">支付订单</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6' }}>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status" style={{color: '#FF9F1A'}}>待收货</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>查看物流</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">确认收货</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status" style={{color: '#FF9F1A'}}>待收货</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>查看物流</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">确认收货</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6' }}>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status" style={{color: '#15A50E'}}>待评价</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>删除订单</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">评价</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-order">
                            <div className="order-main">
                                <div className="main-top">
                                    <div className="top-first">
                                        <img src={require('@src/public/img/sale.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>合一家族</span>
                                        <span className="order-status" style={{color: '#15A50E'}}>待评价</span>
                                    </div>
                                    <div className="top-second">
                                        <img src={require('@src/public/img/order.png')} alt="头部"/>
                                        <span style={{marginLeft: '.18rem'}}>订单号 <span className="order-num">923034984387</span></span>
                                    </div>
                                </div>
                                <div className="main-bottom">
                                    <div className="right-first">
                                        <img src={require('@src/public/img/order.png')} alt="商品图片"/>
                                        <div className="bottom-right">
                                            <p>疼痛速解养护方案10次1疗程</p>
                                            <div className="right-last">
                                                <span className="order-price">￥59.90</span>
                                                <span>×1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-second">
                                        <p>共1件商品  合计  ￥<span>59.90</span> </p>
                                    </div>
                                    <div className="right-third">
                                        <p>预计收益：+330.00</p>
                                        <span style={{marginLeft: '.35rem'}}>删除订单</span>
                                        <span style={{marginLeft: '.30rem'}} className="pay-order">评价</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );

        return (<div id="order">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>我的订单</span>
            </div>
            <TabExample/>
        </div>);
    }
}
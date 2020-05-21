import React, { Component } from "react";
import { Tabs, WhiteSpace,  Icon } from 'antd-mobile';
import './withdraw.less';
export default class Help extends Component{
    render() {

        const tabs = [
            { title: '全部' },
            { title: '待审核' },
            { title: '待付款' },
            { title: '已打款' },
            { title: '无效' },
        ];

        const TabExample = () => (
            <div>
                <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{  backgroundColor: '#F6F6F6' }}>
                        <div className="help-content">
                            <div className="content-p">
                                <div className="p-top">
                                    <p className="p-title">提现编号：1238141300</p>
                                    <div className="right-finish">
                                        <img src={require('@src/public/img/订单完成.png')} alt="订单完成"/>
                                        <span>已完成</span>
                                        <Icon type="right"/>
                                    </div>
                                </div>
                                <p><img src={require('@src/public/img/形状 2@2x.png')} alt="图片"/>提现方式：微信</p>
                                <p><img src={require('@src/public/img/金额@2x.png')} alt="图片"/>提现用户：禅拍养生：王海朋（惠勇）</p>
                                <p><img src={require('@src/public/img/用户@2x.png')} alt="图片"/>提现金额：1.77元</p>
                                <p><img src={require('@src/public/img/形状 2 拷贝@2x.png')} alt="图片"/>手续费：0.01元</p>
                                <p><img src={require('@src/public/img/手续费 (1)@2x.png')} alt="图片"/>到账金额：1.76元</p>
                                <p><img src={require('@src/public/img/形状 2 拷贝@2x.png')} alt="图片"/>申请时间:2020-03-13  01:05:31</p>
                                <p><img src={require('@src/public/img/危险的闪电 拷贝@2x.png')} alt="图片"/>审核时间:2020-03-13  01:13:49</p>
                            </div>
                        </div>
                        <div className="refresh">
                            <img src={require('@src/public/img/refresh.png')} alt="下拉刷新"/>
                            <span>下拉加载更多</span>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6', textAlign: 'center'}}>
                        <img src={require('@src/public/img/empty.png')} alt="空" style={{width: '2.3rem', height: '2.3rem', marginTop: '2.1rem'}}/>
                        <div className="no-record">
                            <span>暂无记录</span>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6' }}>

                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );

        return (<div id="withdraw">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>提现记录</span>
            </div>
            <TabExample/>
        </div>);
    }
}
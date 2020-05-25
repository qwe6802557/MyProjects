import React, { Component } from "react";
import { Tabs, WhiteSpace,  Icon } from 'antd-mobile';
import './vouchers.less';
export default class Help extends Component{
    render() {

        const tabs = [
            { title: '未使用(3)' },
            { title: '已使用(3)' },
            { title: '已过期(3)' },
        ];

        const TabExample = () => (
            <div>
                <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{  backgroundColor: '#F6F6F6', padding: '.3rem' }}>
                        <div className="each-voucher">
                            <div className="voucher-left">
                               <div className="left-content">
                                   <h3>¥ 20</h3>
                                   <span>无门槛</span>
                               </div>
                                <img src={require('@src/public/img/20.png')} alt="20元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>20元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                    <span className="each-button">立即使用</span>
                                </div>
                            </div>
                        </div>
                        <div className="each-voucher">
                            <div className="voucher-left">
                                <div className="left-content">
                                    <h3>¥ 10</h3>
                                    <span>无门槛</span>
                                </div>
                                <img src={require('@src/public/img/10-1.png')} alt="20元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>10元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                    <span className="each-button">立即使用</span>
                                </div>
                            </div>
                        </div>
                        <div className="each-voucher">
                            <div className="voucher-left">
                                <div className="left-content">
                                    <h3>¥ 30</h3>
                                    <span>无门槛</span>
                                </div>
                                <img src={require('@src/public/img/30.png')} alt="30元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>30元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                    <span className="each-button">立即使用</span>
                                </div>
                            </div>
                        </div>
                        <div className="each-voucher">
                            <div className="voucher-left">
                                <div className="left-content">
                                    <h3>¥ 100</h3>
                                    <span>无门槛</span>
                                </div>
                                <img src={require('@src/public/img/100.png')} alt="30元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>100元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                    <span className="each-button">立即使用</span>
                                </div>
                            </div>
                        </div>
                        <div className="each-voucher">
                            <div className="voucher-left">
                                <div className="left-content">
                                    <h3>¥ 10</h3>
                                    <span>无门槛</span>
                                </div>
                                <img src={require('@src/public/img/10-2.png')} alt="30元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>10元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                    <span className="each-button">立即使用</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6', padding: '.3rem' }} className="already-use">
                        <div className="each-voucher" style={{ backgroundColor:'rgba(0,0,0,.1)'}}>
                            <div className="voucher-left">
                                <div className="left-content">
                                    <h3>¥ 10</h3>
                                    <span>无门槛</span>
                                </div>
                                <img src={require('@src/public/img/10-2.png')} alt="30元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>10元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                </div>
                            </div>
                        </div>
                        <div className="each-voucher" style={{ backgroundColor:'rgba(0,0,0,.1)'}}>
                            <div className="voucher-left">
                                <div className="left-content">
                                    <h3>¥ 10</h3>
                                    <span>无门槛</span>
                                </div>
                                <img src={require('@src/public/img/10-2.png')} alt="30元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>10元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                </div>
                            </div>
                        </div>
                        <div className="each-voucher" style={{ backgroundColor:'rgba(0,0,0,.1)'}}>
                            <div className="voucher-left">
                                <div className="left-content">
                                    <h3>¥ 10</h3>
                                    <span>无门槛</span>
                                </div>
                                <img src={require('@src/public/img/10-2.png')} alt="30元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>10元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6', padding: '.3rem' }} className="already-use">
                        <div className="each-voucher" style={{ backgroundColor:'rgba(0,0,0,.1)'}}>
                            <div className="voucher-left">
                                <div className="left-content">
                                    <h3>¥ 10</h3>
                                    <span>无门槛</span>
                                </div>
                                <img src={require('@src/public/img/10-2.png')} alt="30元"/>
                            </div>
                            <div className="voucher-right">
                                <h3>10元无门槛</h3>
                                <div className="button-area">
                                    <span>2019.01.11-2019.01.30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );

        return (<div id="vouchers">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>优惠劵</span>
            </div>
            <TabExample/>
        </div>);
    }
}
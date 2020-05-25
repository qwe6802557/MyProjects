import React, { Component } from "react";
import { Tabs, WhiteSpace,  Icon } from 'antd-mobile';
import './myClass.less';
export default class Help extends Component{
    render() {

        const tabs = [
            { title: '线上课程' },
            { title: '线下课程' },
        ];

        const TabExample = () => (
            <div>
                <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{  backgroundColor: '#fff', padding: '.3rem' }}>
                        <div className="online-content">
                            <div className="content-left">
                                <img src={require('@src/public/img/组27.png')} alt="课程"/>
                            </div>
                            <div className="content-right">
                                <div className="right-main">
                                    <h2>传统文化智慧与齐家治企</h2>
                                       <div className="class-message">
                                           <span>系列课</span>
                                           <span className="class-split"/>
                                           <span style={{color: '#71A9FF'}}>共更新1课</span>
                                       </div>
                                    <div className="open-time">
                                       <span style={{color: '#71A9FF'}}>已学60%</span>
                                        <div className="progress-bar">
                                            <span className="learn-bar"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="online-content">
                            <div className="content-left">
                                <img src={require('@src/public/img/组27.png')} alt="课程"/>
                            </div>
                            <div className="content-right">
                                <div className="right-main">
                                    <h2>传统文化智慧与齐家治企</h2>
                                    <div className="class-message">
                                        <span>系列课</span>
                                        <span className="class-split"/>
                                        <span style={{color: '#71A9FF'}}>共更新1课</span>
                                    </div>
                                    <div className="open-time">
                                        <span style={{color: '#71A9FF', width: '30%'}}>已学30%</span>
                                        <div className="progress-bar">
                                            <span className="learn-bar"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="online-content">
                            <div className="content-left">
                                <img src={require('@src/public/img/组27.png')} alt="课程"/>
                            </div>
                            <div className="content-right">
                                <div className="right-main">
                                    <h2>传统文化智慧与齐家治企</h2>
                                    <div className="class-message">
                                        <span>系列课</span>
                                        <span className="class-split"/>
                                        <span style={{color: '#71A9FF'}}>共更新1课</span>
                                    </div>
                                    <div className="open-time" style={{ display: 'flex', flexDirection: 'row'}}>
                                        <span style={{color: '#71A9FF', width: '30%'}}>已学0%</span>
                                        <div className="learn-button">
                                            开始学习 <Icon type='right'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#fff', padding: '.3rem' }}>
                        <div className="each-content">
                            <div className="content-left">
                                <img src={require('@src/public/img/组27.png')} alt="课程"/>
                                <div className="position">
                                    <img src={require('@src/public/img/position.png')} alt="定位"/>
                                    <span className="position-extra">山东 菏泽</span>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="right-main">
                                    <h2>传统文化智慧与齐家治企</h2>
                                    <span>主讲：李刚老师</span>
                                    <span>开始时间：<span style={{color: '#73A9FF'}}>12-01  09:00</span></span>
                                    <span>开始时间：<span style={{color: '#73A9FF'}}>12-01  09:00</span></span>
                                    <div className="open-time">
                                        <span>距离开课还有</span>
                                        <div className="time-right">
                                            <span>05</span>
                                            <i>:</i>
                                            <span>07</span>
                                            <i>:</i>
                                            <span>58</span>
                                            <i>:</i>
                                            <span>13</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-content">
                            <div className="content-left">
                                <img src={require('@src/public/img/组27.png')} alt="课程"/>
                                <div className="position">
                                    <img src={require('@src/public/img/position.png')} alt="定位"/>
                                    <span className="position-extra">山东 菏泽</span>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="right-main">
                                    <h2>传统文化智慧与齐家治企</h2>
                                    <span>主讲：李刚老师</span>
                                    <span>开始时间：<span style={{color: '#73A9FF'}}>12-01  09:00</span></span>
                                    <span>开始时间：<span style={{color: '#73A9FF'}}>12-01  09:00</span></span>
                                    <div className="open-time">
                                        <span>距离开课还有</span>
                                        <div className="time-right">
                                            <span>05</span>
                                            <i>:</i>
                                            <span>07</span>
                                            <i>:</i>
                                            <span>58</span>
                                            <i>:</i>
                                            <span>13</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-content">
                            <div className="content-left">
                                <img src={require('@src/public/img/组27.png')} alt="课程"/>
                                <div className="position">
                                    <img src={require('@src/public/img/position.png')} alt="定位"/>
                                    <span className="position-extra">山东 菏泽</span>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="right-main">
                                    <h2>传统文化智慧与齐家治企</h2>
                                    <span>主讲：李刚老师</span>
                                    <span>开始时间：<span style={{color: '#73A9FF'}}>12-01  09:00</span></span>
                                    <span>开始时间：<span style={{color: '#73A9FF'}}>12-01  09:00</span></span>
                                    <div className="open-time">
                                        <span>距离开课还有</span>
                                        <div className="time-right">
                                            <span>05</span>
                                            <i>:</i>
                                            <span>07</span>
                                            <i>:</i>
                                            <span>58</span>
                                            <i>:</i>
                                            <span>13</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );

        return (<div id="my-class">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>已购课程</span>
            </div>
            <TabExample/>
        </div>);
    }
}
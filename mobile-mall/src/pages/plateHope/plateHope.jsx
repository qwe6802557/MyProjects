import React, { Component } from "react";
import {Icon} from 'antd-mobile';
import './plateHope.less';
export default class Help extends Component{
    render() {
        return (<div id="hope">
            <div className="help-head">
                <div className="help-top">
                    <div className="arrow-left">
                        <Icon type="left"/>
                    </div>
                    <span>平台愿景</span>
                    <img src={require('@src/public/img/search-pic.png')} alt="搜索"/>
                </div>
                <div className="help-tab">
                    <div className="hope-tab tab-active">
                        综合排序
                    </div>
                    <div className="hope-tab">
                        健康有道
                    </div>
                </div>
            </div>
            <div className="hope-content">
                <div className="content-fifth">
                    <div className="eighth-content">
                        <div className="flex-row">
                            <div className="row-left">
                                <img src={require('@src/public/img/组29.png')} alt="图片"/>
                            </div>
                            <div className="row-right">
                                <div className="floor">
                                    <div className="right-row-left">
                                        <span className="no-finish">未完成</span>
                                        <span className="class-span-common">贴身卫拳</span>
                                    </div>
                                </div>
                                <div className="floor1">
                                    <span className="class-teacher">未知老师</span>
                                    <span className="center-split"/>
                                    <span className="class-count">1节</span>
                                </div>
                                <div className="floor2">
                                    <div className="floor2-left">
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                        <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                    </div>
                                    <div className="right-row-right">
                                        <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eighth-content">
                        <div className="flex-row">
                            <div className="row-left">
                                <img src={require('@src/public/img/组29.png')} alt="图片"/>
                            </div>
                            <div className="row-right">
                                <div className="floor">
                                    <div className="right-row-left">
                                        <span className="no-finish">未完成</span>
                                        <span className="class-span-common">贴身卫拳</span>
                                    </div>
                                </div>
                                <div className="floor1">
                                    <span className="class-teacher">未知老师</span>
                                    <span className="center-split"/>
                                    <span className="class-count">1节</span>
                                </div>
                                <div className="floor2">
                                    <div className="floor2-left">
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                        <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                    </div>
                                    <div className="right-row-right">
                                        <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eighth-content">
                        <div className="flex-row">
                            <div className="row-left">
                                <img src={require('@src/public/img/组29.png')} alt="图片"/>
                            </div>
                            <div className="row-right">
                                <div className="floor">
                                    <div className="right-row-left">
                                        <span className="no-finish">未完成</span>
                                        <span className="class-span-common">贴身卫拳</span>
                                    </div>
                                </div>
                                <div className="floor1">
                                    <span className="class-teacher">未知老师</span>
                                    <span className="center-split"/>
                                    <span className="class-count">1节</span>
                                </div>
                                <div className="floor2">
                                    <div className="floor2-left">
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                        <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                    </div>
                                    <div className="right-row-right">
                                        <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './toRest.less';
export default class Help extends Component{
    render() {
        return (<div id="to-rest">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>收益转余额</span>
            </div>
            <div className="top-content">
                <div className="top-left">
                    <h5>可转账余额</h5>
                    <h4>¥ 10000.00</h4>
                </div>
                <div className="top-right">
                    <div className="right-button">
                        转账
                    </div>
                </div>
            </div>
            <div className="content-title">
                转账记录
            </div>
            <div className="help-content">
                <div className="content-p">
                    <div className="p-top">
                        编号：c031601120001560074
                    </div>
                    <div className="p-bottom">
                        <p>收益转余额：<span style={{color: '#F03F43', fontSize: '.32rem'}}>5000.00</span></p>
                        <p>实际到账：<span>5000.00</span></p>
                        <p>剩余收益：<span>1000.00</span></p>
                        <p>时间：<span>2020-03-17  19:47:12</span></p>
                    </div>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <div className="p-top">
                        编号：c031601120001560074
                    </div>
                    <div className="p-bottom">
                        <p>收益转余额：<span style={{color: '#F03F43', fontSize: '.32rem'}}>5000.00</span></p>
                        <p>实际到账：<span>5000.00</span></p>
                        <p>剩余收益：<span>1000.00</span></p>
                        <p>时间：<span>2020-03-17  19:47:12</span></p>
                    </div>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <div className="p-top">
                        编号：c031601120001560074
                    </div>
                    <div className="p-bottom">
                        <p>收益转余额：<span style={{color: '#F03F43', fontSize: '.32rem'}}>5000.00</span></p>
                        <p>实际到账：<span>5000.00</span></p>
                        <p>剩余收益：<span>1000.00</span></p>
                        <p>时间：<span>2020-03-17  19:47:12</span></p>
                    </div>
                </div>
            </div>
        </div>);
    }
}
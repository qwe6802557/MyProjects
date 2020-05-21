import React, { Component } from 'react';
import {Icon} from "antd-mobile";
import './myIncome.less';
import IncomeRule from './incomeRule';


export default class MyIncome extends  Component{

    state = {
        scholarshipList: [{
            id: 1,
            title: '招商收益',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 2,
            title: '招商收益',
            time: '今天 08:12',
            cost: '+10.00元'
        }],
        visible: false
    };

    openModal = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    render() {
        const { scholarshipList, visible } = this.state;
        return (<div id="myIncome">
            {
                visible ? <IncomeRule openModal={this.openModal}/> : null
            }
            <div className="help-head">
                <div className="first-bar">
                    <div className="arrow-left">
                        <Icon type="left" color={'#fff'}/>
                    </div>
                    <span>我的收益</span>
                    <span className="record">提现记录</span>
                </div>
                <div className="second-bar">
                    <h4>可提现金额（元）</h4>
                    <h3>13456.00</h3>
                    <div className="second-count">
                        <div className="count-left">
                            <h5>1234.00</h5>
                            <span>今日收益（元）</span>
                        </div>
                        <div className="count-right">
                            <h5>454.00</h5>
                            <span>总收益（元）</span>
                        </div>
                    </div>
                </div>
                <div className="third-bar">
                </div>
            </div>
            <div className="help-content">
                <div className="content-title">
                    <span>快捷筛选</span>
                    <img src={require('@src/public/img/search.png')} alt=""/>
                </div>
                <div className="content-main">
                    <div className="each-box active-box">
                        招商收益
                    </div>
                    <div className="each-box">
                        招商收益
                    </div>
                    <div className="each-box">
                        招商收益
                    </div>
                    <div className="each-box">
                        招商收益
                    </div>
                    <div className="each-box">
                        招商收益
                    </div>
                    <div className="each-box">
                        招商收益
                    </div>
                </div>
            </div>
            <div className="choose-content">
                <div className="choose-select">
                    <span>本月</span>
                    <img src={require('@src/public/img/arrow-down.png')} alt="箭头"/>
                </div>
                <div className="choose-right">
                    <span>总收益</span>
                    <span>¥ 1000.00</span>
                    <Icon type="right"/>
                </div>
            </div>
            <div className="income-content">
                <div className="content-p">
                    {
                        scholarshipList.map(item => {
                            return (
                                <div className="each-item" key={item.id}>
                                    <div className="img-box">
                                        <img src={require('@src/public/img/组 39 (1).png')} alt="money"/>
                                    </div>
                                    <div className="box-right">
                                        <div className="right-left">
                                            <p>{item.title}</p>
                                            <span>{item.time}</span>
                                        </div>
                                        <div className="right-float">
                                            <span>{item.cost}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="button-area">
                    <div className="button-first">
                        收益转余额
                    </div>
                    <div className="button-second">
                        提现
                    </div>
                </div>
                <div className="button-click">
                    <img src={require('@src/public/img/question.png')} alt="规则"/>
                    <span onClick={this.openModal}>提现规则</span>
                </div>
            </div>
        </div>);
    }

}
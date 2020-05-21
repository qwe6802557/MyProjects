import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './recharge.less';
export default class Income extends Component{

    state = {
        scholarshipList: [{
            id: 1,
            title: '微信充值',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 2,
            title: '后台充值',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 3,
            title: '后台充值',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 4,
            title: '微信充值',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 5,
            title: '后台充值',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 6,
            title: '后台充值',
            time: '今天 08:12',
            cost: '+10.00元'
        }]
    };

    render() {
        const { scholarshipList } = this.state;
        return (<div id="recharge">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>充值记录</span>
            </div>
            <div className="choose-content">
                <div className="choose-select">
                    <span>本月</span>
                    <img src={require('@src/public/img/arrow-down.png')} alt="箭头"/>
                </div>
            </div>
            <div className="help-content">
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
            </div>
        </div>);
    }
}
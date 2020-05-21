import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './scholarship.less';
export default class Income extends Component{

    state = {
        scholarshipList: [{
            id: 1,
            title: '奖学金2019-2020',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 2,
            title: '奖学金2018-2019',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 3,
            title: '奖学金2017-2018',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 4,
            title: '奖学金2016-2017',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 5,
            title: '奖学金2015-2016',
            time: '今天 08:12',
            cost: '+10.00元'
        }, {
            id: 6,
            title: '奖学金2014-2015',
            time: '今天 08:12',
            cost: '+10.00元'
        }]
    };

    render() {
        const { scholarshipList } = this.state;
        return (<div id="scholarship">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>奖学金明细</span>
            </div>
            <div className="help-content">
                <div className="content-p">
                    {
                        scholarshipList.map(item => {
                            return (
                                <div className="each-item" key={item.id}>
                                    <div className="img-box">
                                        <img src={require('@src/public/img/组 39.png')} alt="money"/>
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
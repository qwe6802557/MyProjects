import React, { Component } from "react";
import {Icon, List} from 'antd-mobile';
import './helpOther.less';

const { Item } = List;
export default class Help extends Component{
    render() {
        return (<div id="helpOther">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>网站帮助</span>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <List  className="my-list">
                        <Item arrow="horizontal">发货时间</Item>
                        <Item arrow="horizontal">快递物流</Item>
                        <Item arrow="horizontal">商品问题</Item>
                        <Item arrow="horizontal">退款/售后</Item>
                        <Item arrow="horizontal">运费问题</Item>
                        <Item arrow="horizontal">付费问题</Item>
                        <Item arrow="horizontal">账号安全</Item>
                        <Item arrow="horizontal">活动相关</Item>
                        <Item arrow="horizontal">优惠卷</Item>
                        <Item arrow="horizontal">服务投诉</Item>
                    </List>
                </div>
            </div>
        </div>);
    }
}
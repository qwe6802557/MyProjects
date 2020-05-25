import React, { Component } from "react";
import {Button, Icon, List} from 'antd-mobile';
import './confirm.less';

const { Item } = List;

export default class Help extends Component{
    render() {
        return (<div id="confirmOrder">
            <div className="help-head">
                <div className="head-title">
                    <div className="arrow-left">
                        <Icon type="left"/>
                    </div>
                    <span>确认订单</span>
                </div>
                <div className="head-content">
                    <div className="content-message">
                        <h3>张三丰</h3>
                        <span>17899004945</span>
                    </div>
                    <div className="content-bottom">
                        <img src={require('@src/public/img/orderPosition.png')} alt="定位地址"/>
                        <span>山东省青岛市市北区永平路街道黑龙江中路88 号鑫江桂圆9号楼二单元2001</span>
                        <img src={require('@src/public/img/arrow-right.png')} alt="右箭头" className="arrow-right"/>
                    </div>
                </div>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <List className="my-list">
                        <Item className="list-item-extra">
                            <div className="left-img">
                                <img src={require('@src/public/img/order.png')} alt="商品1"/>
                            </div>
                            <div className="right-message">
                                <div className="message-top">
                                    <h4>网红高颜值头戴式蓝牙耳机优质音质独 享包邮</h4>
                                </div>
                                <div className="message-bottom">
                                    <span className="order-price">￥59.90</span>
                                    <span className="order-num">×1</span>
                                </div>
                            </div>
                        </Item>
                        <Item extra={'快递运输'} arrow="horizontal">配送方式</Item>
                        <Item extra={<span style={{color: 'red'}}>2.00</span>}>奖学金抵扣</Item>
                        <Item extra={<span style={{color: 'red'}}>0</span>}>运费</Item>
                        <Item extra={'无可用优惠劵'} >优惠劵</Item>
                        <Item extra={'填写备注要求'} >备注</Item>
                    </List>
                </div>
            </div>
            <div className="pay-bar">
                <div className="bar-left">
                    <span>合计: <span className='class-price'>¥66</span>(含运费)</span>
                </div>
                <div className="bar-right">
                    {/*<Button type="warning">删除</Button>*/}
                    <Button type="primary">提交订单</Button>
                </div>
            </div>
        </div>);
    }
}
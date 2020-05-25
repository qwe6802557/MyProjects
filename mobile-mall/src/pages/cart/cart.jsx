import React, { Component } from "react";
import {Icon, Stepper, Checkbox, Button } from 'antd-mobile';
import './cart.less';

const { CheckboxItem } = Checkbox;
export default class Help extends Component{

    state = {
        val: 0
    };

    changeStep (val) {
        this.setState({ val });
    }

    render() {
        return (<div id="cart">
            <div className="help-head">
                <div className="help-top">
                    <div className="arrow-left">
                        <Icon type="left"/>
                    </div>
                    <span>购物车</span>
                    <img src={require('@src/public/img/search-pic.png')} alt="搜索"/>
                </div>
            </div>
            <div className="hope-content">
                <div className="content-fifth">
                    <div className="eighth-content">
                        <div className="flex-row">
                            <div className="row-left">
                                <CheckboxItem />
                                <img src={require('@src/public/img/组29.png')} alt="图片"/>
                            </div>
                            <div className="row-right">
                                <div className="floor">
                                    <div className="right-row-left">
                                        <span className="class-span-common">飞利浦手机支架</span>
                                    </div>
                                </div>
                                <div className="floor1">
                                    <span className="class-teacher">库存 86件</span>
                                </div>
                                <div className="floor2">
                                    <div className="floor2-left">
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥66</span>
                                    </div>
                                    <div className="right-row-right">
                                        <Stepper
                                            style={{ width: '100%', minWidth: '100px' }}
                                            showNumber
                                            max={10}
                                            min={1}
                                            value={this.state.val}
                                            onChange={this.changeStep.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eighth-content">
                        <div className="flex-row">
                            <div className="row-left">
                                <CheckboxItem />
                                <img src={require('@src/public/img/组29.png')} alt="图片"/>
                            </div>
                            <div className="row-right">
                                <div className="floor">
                                    <div className="right-row-left">
                                        <span className="class-span-common">飞利浦手机支架</span>
                                    </div>
                                </div>
                                <div className="floor1">
                                    <span className="class-teacher">库存 86件</span>
                                </div>
                                <div className="floor2">
                                    <div className="floor2-left">
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥66</span>
                                    </div>
                                    <div className="right-row-right">
                                        <Stepper
                                            style={{ width: '100%', minWidth: '100px' }}
                                            showNumber
                                            max={10}
                                            min={1}
                                            value={this.state.val}
                                            onChange={this.changeStep.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eighth-content">
                        <div className="flex-row">
                            <div className="row-left">
                                <CheckboxItem />
                                <img src={require('@src/public/img/组29.png')} alt="图片"/>
                            </div>
                            <div className="row-right">
                                <div className="floor">
                                    <div className="right-row-left">
                                        <span className="class-span-common">飞利浦手机支架</span>
                                    </div>
                                </div>
                                <div className="floor1">
                                    <span className="class-teacher">库存 86件</span>
                                </div>
                                <div className="floor2">
                                    <div className="floor2-left">
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥66</span>
                                    </div>
                                    <div className="right-row-right">
                                        <Stepper
                                            style={{ width: '100%', minWidth: '100px' }}
                                            showNumber
                                            max={10}
                                            min={1}
                                            value={this.state.val}
                                            onChange={this.changeStep.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pay-bar">
            <div className="bar-left">
                <CheckboxItem>
                    全选
                </CheckboxItem>
                <span>合计: <span className='class-price'>¥66</span></span>
            </div>
            <div className="bar-right">
                {/*<Button type="warning">删除</Button>*/}
                <Button type="primary">结算</Button>
            </div>
        </div>
        </div>);
    }
}
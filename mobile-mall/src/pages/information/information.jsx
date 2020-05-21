import React, { Component } from "react";
import { Icon, List } from 'antd-mobile';
import './information.less';
const { Item } = List;
export default class Help extends Component{
    render() {
        return (<div id="information">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>最新资讯</span>
            </div>
            <div className="help-content">
                <List>
                    <Item>
                        <div className="item-left">
                            <p>当歹徒双手掐您脖子的时候，您可以这样操作，反手...</p>
                            <div className="left-bottom">
                                <img src={require('@src/public/img/time.png')} alt="时钟" style={{marginRight: '.1rem'}}/>
                                <span style={{marginRight: '.3rem'}}>2019-12-24 19:30:00</span>
                                <img src={require('@src/public/img/eyes.png')} alt="视图" style={{marginRight: '.1rem'}}/>
                                <span>5349</span>
                            </div>
                        </div>
                        <div className="item-right">
                            <img src={require('@src/public/img/组26.png')}/>
                        </div>
                    </Item>
                    <Item>
                        <div className="item-left">
                            <p>女生适合练什么武术？现在女生的自我保护意识越来越强...</p>
                            <div className="left-bottom">
                                <img src={require('@src/public/img/time.png')} alt="时钟" style={{marginRight: '.1rem'}}/>
                                <span style={{marginRight: '.3rem'}}>2019-12-24 19:30:00</span>
                                <img src={require('@src/public/img/eyes.png')} alt="视图" style={{marginRight: '.1rem'}}/>
                                <span>5349</span>
                            </div>
                        </div>
                        <div className="item-right">
                            <img src={require('@src/public/img/show.png')}/>
                        </div>
                    </Item>
                    <Item>
                        <div className="item-left">
                            <p>很多女生都会学习一些防身之术,我们来看看女生适合...</p>
                            <div className="left-bottom">
                                <img src={require('@src/public/img/time.png')} alt="时钟" style={{marginRight: '.1rem'}}/>
                                <span style={{marginRight: '.3rem'}}>2019-12-24 19:30:00</span>
                                <img src={require('@src/public/img/eyes.png')} alt="视图" style={{marginRight: '.1rem'}}/>
                                <span>5349</span>
                            </div>
                        </div>
                        <div className="item-right">
                            <img src={require('@src/public/img/组29.png')}/>
                        </div>
                    </Item>
                    <Item>
                        <div className="item-left">
                            <p>女生适合练女子防身术擒拿训练，擒拿(分筋错骨手)...</p>
                            <div className="left-bottom">
                                <img src={require('@src/public/img/time.png')} alt="时钟" style={{marginRight: '.1rem'}}/>
                                <span style={{marginRight: '.3rem'}}>2019-12-24 19:30:00</span>
                                <img src={require('@src/public/img/eyes.png')} alt="视图" style={{marginRight: '.1rem'}}/>
                                <span>5349</span>
                            </div>
                        </div>
                        <div className="item-right">
                            <img src={require('@src/public/img/组31.png')}/>
                        </div>
                    </Item>
                </List>
                <div className="refresh">
                    <img src={require('@src/public/img/refresh.png')} alt="下拉刷新"/>
                    <span>下拉加载更多</span>
                </div>
            </div>
        </div>);
    }
}
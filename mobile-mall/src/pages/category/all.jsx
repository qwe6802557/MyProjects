import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './all.less';
export default class Help extends Component{

    state = {
        categoryList: [{
            id: 1,
            value: '推荐分类',
            isHot: true
        }, {
            id: 2,
            value: '健康有道'
        }, {
            id: 3,
            value: '和谐家庭'
        }, {
            id: 4,
            value: '恩爱夫妻'
        }, {
            id: 5,
            value: '合格父母'
        }, {
            id: 6,
            value: '事业有成'
        }, {
            id: 7,
            value: '生命安全'
        }, {
            id: 8,
            value: '个人修行'
        }, {
            id: 9,
            value: '社会公益'
        }, {
            id: 10,
            value: '推广赚钱'
        }],
        commentList: [{
            id: 2,
            value: '健康有道',
        }, {
            id: 3,
            value: '和谐家庭'
        }, {
            id: 4,
            value: '恩爱夫妻'
        }, {
            id: 5,
            value: '合格父母'
        }, {
            id: 6,
            value: '事业有成'
        }, {
            id: 7,
            value: '生命安全'
        }, {
            id: 8,
            value: '个人修行'
        }, {
            id: 9,
            value: '社会公益'
        }, {
            id: 10,
            value: '推广赚钱'
        }],
        nowKey: 1
    };

    render() {
        const { categoryList } = this.state;
        return (<div id="all">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>全部分类</span>
            </div>
            <div className="all-content">
                <div className="leftBar">
                    {
                        categoryList.map(item => (
                            <div className={this.state.nowKey === item.id ? "each-bar category-active" : "each-bar"} key={item.id}>
                                {
                                    item.isHot ? (
                                        <img src={require('@src/public/img/fire.png')} alt="火热"/>
                                    ) : null
                                }
                                <span>{item.value}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="right-content">
                    <img src={require('@src/public/img/chinnaBanner.png')} alt="banner" style={{ height: '2.8rem'}}/>
                    <div className="rightBar">
                        <h3>推荐分类</h3>
                        <div className="seeMore">
                            <span>查看更多</span>
                            <img src={require('@src/public/img/组 25(14).png')} style={{width: '.26rem', height: '.26rem'}}/>
                        </div>
                    </div>
                    <div className="right-bottom">
                        <div className="bottom-main">
                            {
                                this.state.commentList.map(item => (
                                    <div className="each-box" key={item.id}>
                                        <img src={require(`@src/public/img/0${item.id - 1}.png`)} alt="图片"/>
                                        <span>{item.value}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
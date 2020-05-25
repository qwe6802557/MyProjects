import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './allOther.less';
export default class Help extends Component{

    state = {
        categoryList: [{
            id: 1,
            value: '全部分类',
        }, {
            id: 2,
            value: '平台愿景'
        }, {
            id: 3,
            value: '贴身短打'
        }, {
            id: 4,
            value: '武学智慧'
        }, {
            id: 5,
            value: '公益行'
        }, {
            id: 6,
            value: '教子有方'
        }, {
            id: 7,
            value: '生命一线'
        }, {
            id: 8,
            value: '健康有道'
        }, {
            id: 9,
            value: '见证成长'
        }, {
            id: 10,
            value: '武学研究院'
        }],
        commentList: [{
            id: 2,
            value: '平台愿景'
        }, {
            id: 3,
            value: '贴身短打'
        }, {
            id: 4,
            value: '武学智慧'
        }, {
            id: 5,
            value: '公益行'
        }, {
            id: 6,
            value: '教子有方'
        }, {
            id: 7,
            value: '生命一线'
        }, {
            id: 8,
            value: '健康有道'
        }, {
            id: 9,
            value: '见证成长'
        }, {
            id: 10,
            value: '武学研究院'
        }],
        nowKey: 1
    };

    render() {
        const { categoryList } = this.state;
        return (<div id="all-other">
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
                                        <img src={require(`@src/public/img/00${item.id - 1}.png`)} alt="图片"/>
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
import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './detail.less';
export default class Help extends Component{
    render() {
        return (<div id="information-detail">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>资讯详情</span>
            </div>
            <div className="help-content">
                <h1>当歹徒双手掐您脖子的时候， 您可以这样操作</h1>
                <span>2小时前</span>
                <p>学好武术不仅可以传承中华文化，还能强身健体。民福康健康武术栏目为广大网友提供武术基本功和各种武术操套路视频和培训方法。通过民福康健康您不但可以跟武术高手们一起切磋武艺，还能学到正宗的少林武术。</p>
                <img src={require('@src/public/img/组28.png')} alt="资讯"/>
                <p style={{marginTop: '.4rem'}}>学好武术不仅可以传承中华文化，还能强身健体。民福康健康武术栏目为广大网友提供武术基本功和各种武术操套路视频和培训方法。通过民福康健康您不但可以跟武术高手们一起切磋武艺，还能学到正宗的少林武术。</p>
            </div>
        </div>);
    }
}
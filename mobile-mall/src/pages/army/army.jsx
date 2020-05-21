import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './army.less';
export default class Help extends Component{
    render() {
        return (<div id="army">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>奥粉军团</span>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <div className="content-top">
                        <img src={require('@src/public/img/avatar.png')} alt="头像"/>
                        <div className="top-message">
                            <h3>可爱的小白</h3>
                            <p>级别：合作商</p>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-box">
                            <div className="circle">
                                <img src={require('@src/public/img/形状 4.png')} alt="图片"/>
                            </div>
                            <span>蝴蝶军团</span>
                            <span>200人</span>
                        </div>
                        <div className="bottom-box">
                            <div className="circle">
                                <img src={require('@src/public/img/形状 5.png')} alt="图片"/>
                            </div>
                            <span>飞鸽军团</span>
                            <span>500人</span>
                        </div>
                        <div className="bottom-box">
                            <div className="circle">
                                <img src={require('@src/public/img/形状 10.png')} alt="图片" style={{width: '.42rem', height: '.37rem', left:'64%', top: '65%'}}/>
                            </div>
                            <span>孔雀军团</span>
                            <span>1000人</span>
                        </div>
                        <div className="bottom-box" >
                            <div className="circle">
                                <img src={require('@src/public/img/形状 11.png')} alt="图片" style={{width: '.42rem', height: '.37rem', left:'64%', top: '65%'}}/>
                            </div>
                            <span>凤凰军团</span>
                            <span>10000人</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="permit">
                <div className="permit-top">
                    <h2>点亮证书</h2>
                </div>
                <div className="permit-bottom">
                    <img src={require('@src/public/img/permit-img.png')} alt="证书"/>
                </div>
            </div>
        </div>);
    }
}
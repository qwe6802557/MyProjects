import React, { Component } from "react";
import { Icon } from 'antd-mobile';
import './help.less';
export default class Help extends Component{
    render() {
        return (<div id="help">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>网站帮助</span>
            </div>
            <div className="help-content">
                <div className="content-p">
                    <p>如果您拼团成功后商家超过承诺时间还没有给您发货,您可以打开手机[拼多多APP1-[个人中心]-[我的订单]，点击该商品,申请退款或者与商家沟通，
                        催促其尽快发货。拼多多商城审核无误会尽快给您赠送一张至少3元无门槛 现金券，
                        作为商家的违规补偿。给您带来不便深感抱歉，多多会不断加强对商家的管理，
                        以期给您更好的购物体验,感谢您的支持与信赖。</p>
                    <div className="content-button">
                        <span>联系客服</span>
                    </div>
                </div>
            </div>
        </div>);
    }
}
import React, { Component } from "react";
import { List,  Icon } from 'antd-mobile';
const Item = List.Item;
import './personal.less';
export default class Help extends Component{

    state = {
        categoryList: [{
            id: 1,
            value: '零食'
        }, {
            id: 2,
            value: '水果'
        }, {
            id: 3,
            value: '小食'
        }, {
            id: 4,
            value: '主食'
        }, {
            id: 5,
            value: '奶制品'
        }, {
            id: 6,
            value: '特产'
        }, {
            id: 7,
            value: '糖果'
        }, {
            id: 8,
            value: '辣条'
        }]
    };

    render() {
        const { categoryList } = this.state;
        return (<div id="personal">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>个人资料</span>
            </div>
            <div className="help-content">
                <List renderHeader={() => '基础信息'} className="my-list">
                    <Item extra={<img src={require('@src/public/img/形状 1578.png')} alt="头像" style={{width: '1.1rem', height: '1.1rem'}}/>}>点击修改头像</Item>
                    <Item extra={'王克杰'}>我的姓名</Item>
                    <Item extra={'合作商'} arrow="horizontal">身份</Item>
                    <Item extra={'男'} arrow="horizontal">性别</Item>
                    <Item extra={'请选择地址'} arrow="horizontal">城市</Item>
                    <Item extra={'18911973848'} arrow="horizontal">手机号</Item>
                </List>
                <div className="category-list">
                    <List renderHeader={() => '喜欢的分类'} className="my-list">
                        <Item>
                            {
                                categoryList.map(item => (
                                    <div className="each-box" key={item.id}>
                                        {
                                            item.value
                                        }
                                    </div>
                                ))
                            }
                        </Item>
                    </List>
                </div>
            </div>
        </div>);
    }
}
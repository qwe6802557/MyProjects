import React, { Component } from "react";
import { Icon,  Modal } from 'antd-mobile';
import './address.less';

/*const { CheckboxItem } = Checkbox;*/
const { alert } = Modal;
export default class Help extends Component{

    deleteAddress () {
        alert('', '确定要删除此条地址吗?', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确定', onPress: () => console.log('ok') },
        ]);
    }
    render() {
        return (<div id="address">
            <div className="help-head">
                <div className="arrow-left">
                    <Icon type="left"/>
                </div>
                <span>收货地址</span>
            </div>
            <div className="help-content">
                <div className="empty">
                    <img src={require('@src/public/img/nowPosition.png')} alt="定位" className="empty-pic"/>
                    <span>暂无地址</span>
                </div>
                {/*<div className="content-p">
                    <div className="address-title">
                        <h5>王海朋</h5>
                        <span>131****7775</span>
                    </div>
                    <p>北京市东城区东花市街道 新景家园西区4号楼3单元 801</p>
                    <div className="address-bottom">
                        <CheckboxItem>设为默认</CheckboxItem>
                        <div className="operation">
                            <div className="edit">
                                <img src={require('@src/public/img/edit.png')} alt="编辑"/>
                                编辑
                            </div>
                            <div className="delete" onClick={this.deleteAddress.bind(this)}>
                                <img src={require('@src/public/img/delete.png')} alt="删除"/>
                                删除
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
            <div className="content-bottom">
                <span className="button-add">
                    <img src={require('@src/public/img/add-button.png')} alt="地址"/>
                    添加地址
                </span>
            </div>
        </div>);
    }
}
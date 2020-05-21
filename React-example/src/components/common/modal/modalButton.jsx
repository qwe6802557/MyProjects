import React, { Component } from "react";
import { Button } from "antd";
import './modal.less';
export default class ModalButton extends Component{
    render() {
        return (
            <div className="modal-button">
                {
                    this.props.cancel_hidden?
                        ''
                        :
                        <Button shape="round" type="primary" id="cancelButton" className="cancel" onClick={this.props.onCancel} loading={this.props.loading_cancel}>{this.props.cancelText || '取消'}</Button>
                }
                <Button shape="round" type="primary" id="okButton" onClick={this.props.onOk } loading={this.props.loading}>{this.props.okText || '确定'}</Button>
            </div>
        );
    }
}
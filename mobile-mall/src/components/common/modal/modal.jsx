import React, { Component } from "react";
import { Modal as AntdModal } from "antd";
import {withRouter} from "react-router-dom";
import ModalButton from "@components/common/modal/modalButton";
import "./modal.less";
@withRouter
export default class Modal extends Component{
    render() {
        const {okText, cancelText, onCancel, onCancelExtra, onOk, loading, loading_cancel, cancel_hidden, className,  ...other} = this.props;
        const buttonObj = { okText, cancelText, onCancel, onOk, loading, loading_cancel, cancel_hidden};
        return (
            <div className="package-modal">
                <AntdModal className={ className? "iop-modal" + " " + className : "iop-modal"}
                           {...other}
                           onCancel={onCancelExtra? onCancelExtra : onCancel }
                           maskClosable={false}
                           zIndex={this.props.zIndex?this.props.zIndex:1001}
                           footer={<ModalButton  { ...buttonObj }/>}
                >
                </AntdModal>
            </div>
        );
    }
}
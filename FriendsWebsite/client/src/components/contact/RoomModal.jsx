import React, { Component } from 'react';
import { Modal, Table, Input} from 'antd';
import store from "../../store";

export default class RoomModal extends Component{

    state = {
        selectedId: [],
        user_id: store.getState().auth.user._id,
        value: '',
        selectedRowKeys: []
    };
    tableInit = () => {
        this.columns =  [
            {
                title: 'User Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Email Address',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Register Timestamp',
                dataIndex: 'date',
                key: 'date',
            },
        ];
    };

    handleOk = () => {
        const { user_id, selectedId, value } = this.state;
        this.props.handleOk({
            user_id,
            selectedId,
            name: value
        });
    };

    inputName = e => {
      this.setState({
          value: e.target.value
      })
    };

    render () {
        this.tableInit();
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRow) => {
                this.setState({
                    selectedId: selectedRow,
                    selectedRowKeys
                });
            },
            selectedRowKeys: this.state.selectedRowKeys
        };

        return (<div>
            <Modal
                title={'Create a group'}
                visible={this.props.visibleModal}
                onOk={this.handleOk}
                onCancel={this.props.handleCancel}
                okText={this.props.okText}
                cancelText={'Cancel'}
                className="add-modal"
                confirmLoading={this.props.confirmLoading}
            >
                <div className="name-area">
                    <span>Group name:</span>
                    <Input value={this.state.value} placeholder="Please enter the group name" style={{width: '200px'}} onChange={this.inputName}/>
                </div>
                <Table dataSource={ this.props.list }
                       columns={this.columns}
                       rowSelection={rowSelection}
                       pagination={false}
                       style={{maxHeight: '700px'}}
                       rowKey={'_id'}/>
            </Modal>
        </div>)
    }
}
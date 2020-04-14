import React, { Component } from 'react';
import { Modal, Table} from 'antd';
import store from "../../store";
export default class AddModal extends Component {

    state = {
        selectedId: [],
        user_id: store.getState().auth.user._id
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
                title: 'Time Registered',
                dataIndex: 'date',
                key: 'date',
            },
        ];
    };

    handleOk = () => {
        const { user_id, selectedId } = this.state;
        this.props.handleOk({
            user_id,
            selectedId,
            changeSelectId: this.changeSelectId
        });
    };

    changeSelectId = () => {
      this.setState({
          selectedId: []
      });
    };

    componentDidMount() {
        this.tableInit();
    }

    render() {
        const rowSelection = {
            onChange: (selectedRowKeys) => {
                this.setState({
                    selectedId: selectedRowKeys
                });
            },
            selectedRowKeys: this.state.selectedId
        };
        return (<div>
            <Modal
                title={this.props.titleModal}
                visible={this.props.visibleModal}
                onOk={this.handleOk}
                onCancel={this.props.handleCancel}
                okText={this.props.okText}
                cancelText={'Cancel'}
                className="add-modal"
                confirmLoading={this.props.confirmLoading}
            >
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
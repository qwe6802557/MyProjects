import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

// import {
//     connect
// } from 'react-redux';
// import {
//     bindActionCreators
// } from 'redux';
import { Table as AntdTable } from 'antd';

import './table.less';

// @withRouter
export default class Table extends Component {
    
	render() {
		return (
			<div>
                <AntdTable
                    {...this.props}
                    pagination={
                        {   
                            showQuickJumper: true,
                            showTotal: (total, range) => {
                                return <span>{`共${this.props.pagination.totalPage || 1 }页 共${total}条数据`}</span>  ;
                            },
                            ...this.props.pagination
                        }
                    }
                    className='iop-table'
                />
            </div>
		);
	}
}

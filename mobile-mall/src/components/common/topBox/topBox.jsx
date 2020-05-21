import React, {Component} from "react";
import PropTypes from 'prop-types';
import './topBox.less';
import {withRouter} from "react-router-dom";

@withRouter
export default class TopBox extends Component{
    static propTypes = {
        leftTitle:PropTypes.string,
        rightNum:PropTypes.number,
        color:PropTypes.string
    };
    static defaultProps = {
        leftTitle:'',
        rightNum:0,
        color:'#3783f8'
    };
    render() {
        const { leftTitle, rightNum, color} = this.props;
        return (<div className="top-box">
            <div className="box-content">
                <div className="box-left">
                    <span>{leftTitle}</span>
                </div>
                <div className="box-right">
                    <span style={{color}}>{rightNum}</span>
                    <span className="number-line" style={{backgroundColor: color}}/>
                </div>
            </div>
        </div>);
    }
}
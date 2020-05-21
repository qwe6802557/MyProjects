import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contentTitle.less';
import {withRouter} from "react-router-dom";

@withRouter
export default class ContentTitle extends Component{
    static propTypes = {
        title: PropTypes.string,
        hasTriangle: PropTypes.bool,
    };
    static defaultProps = {
        title: '',
        hasTriangle: false,
    };
    render() {
        const {
            title,
            hasTriangle,
        } = this.props;
        return (<div className={'content-title' + (hasTriangle ? ' triangle' : '')}>
            <h1>{title}</h1>
        </div>);
    }
}
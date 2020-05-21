import React, { Component } from "react";
import CatchErrorBoundary from '@common/catchErrorBoundary';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { renderRoutes } from 'react-router-config';
import './layout.less';

export default class Layout extends Component{
    render() {

        return (<div className="layout">
            <CatchErrorBoundary>
                <TransitionGroup>
                    <CSSTransition
                        key={this.props.location.pathname}
                        classNames='fade-node'
                        timeout={300}
                    >
                        {renderRoutes(this.props.route.routes, {}, {location:this.props.location})}
                    </CSSTransition>
                </TransitionGroup>
            </CatchErrorBoundary>
        </div>);
    }
}
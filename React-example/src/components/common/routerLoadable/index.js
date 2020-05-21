import React, {
    Component
} from 'react';

import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

import './routerLoadable.less';


let routerLoadableContainer;

if(!document.getElementById('routerLoadableContainer')){

    let body = document.getElementsByTagName('body')[0];

    routerLoadableContainer=document.createElement('div');
    routerLoadableContainer.id='routerLoadableContainer';
    routerLoadableContainer.className='router-loadable-container';

    body.appendChild(routerLoadableContainer);

}


class Modal extends Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        routerLoadableContainer.appendChild(this.el);
    }

    componentWillUnmount() {
        // routerLoadableContainer.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }

}

function loading(){
    return (
        <Modal>
            <Spin delay={300}/>
        </Modal>
    );
}


function RouterLoadable(opts){
// console.log(opts.loader())
    return Loadable(
        Object.assign({}, {
            loading
        }, opts)
    );

}


export default RouterLoadable;
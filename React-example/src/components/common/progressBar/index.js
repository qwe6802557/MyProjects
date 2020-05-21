import React, {
    Component
} from 'react';

import ReactDOM from 'react-dom';

import './progressBar.less';

let progressBarContainer;

if(!document.getElementById('progressBarContainer')){

    let body = document.getElementsByTagName('body')[0];

    progressBarContainer=document.createElement('div');
    progressBarContainer.id='progressBarContainer';
    progressBarContainer.className='progress-bar-container';

    body.appendChild(progressBarContainer);

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
        progressBarContainer.appendChild(this.el);
    }

    componentWillUnmount() {
        // progressBarContainer.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }

}


function ProgressBar(props){

    return (
        <Modal>
        </Modal>
    );

}


export default ProgressBar;
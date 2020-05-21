import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

serviceWorker.unregister();

if (module.hot&&process.env.NODE_ENV!=='production') {
    module.hot.accept();
}
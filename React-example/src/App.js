import React, {
    Component
} from 'react';
import {
    HashRouter as Router,
} from 'react-router-dom';

import {
    message
} from 'antd';
import 'moment/locale/zh-cn';
import ProgressBar from '@common/progressBar';
/*
*错误边界捕获
*每个拥有router或者子router的位置都得包裹一个错误边界捕获的组件，防止整个应用垮掉或带来的风险操作
*/
import CatchErrorBoundary from '@common/catchErrorBoundary';
/*
*懒加载模块components
*/
/*import {actiontor as actiontorLogin} from '@models/login.js';*/
import './App.less';
import { renderRoutes } from 'react-router-config';
import routes from '@router';
import {getAutoPathPrefix} from "@js/utils.js";

const autoPathPrefix = getAutoPathPrefix();

message.config({
    top: 200,
    maxCount: 1,
});

fetch.default({
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    credentials: 'include',
    beforeSend() {

        //排除serviceWorker项
        if(!/^((ht|f)tps?):\/\/[\s\S]+\/[\s\S]+\.[\s\S]+$/.test(this.uri)){
            this.uri = `${autoPathPrefix}${this.uri}`;
        }

    },
    async dataFilter(response) {

        //排除serviceWorker请求文件项
        if(!/^((ht|f)tps?):\/\/[\s\S]+\/[\s\S]+\.[\s\S]+$/.test(response.url)){

            if (response.ok===false) {
                message.error(`网络异常`);
                return {};
            }

            let data = await response.json();

            let {code, message:messageDes} = data;
            //未登录
            if(code === '5000'){

                message.warning('请登录');
            }

            if(code !== '9000'){
                message.error(messageDes);
            }

            return data;

        }else{
            return response;
        }

    },
    fail(e) {
        message.error(e.toString());
        return {e};
    }
});
// const supportsHistory = 'pushState' in window.history

class App extends Component {
    render() {
        return (<div style={{height:'100%'}}>
                        <ProgressBar/>
                        <Router  keyLength={12}>
                            <CatchErrorBoundary>
                                <Layout/>
                            </CatchErrorBoundary>
                        </Router>
                    </div>
        );
    }
}

class Layout extends Component {
 /*   // 登录和权限状态限制
    flagRedirectTo(loginFlag) {
        let pathname = this.props.history.location.pathname;
        const reSystemPathname = /^\/(auth)/;
        // console.log(pathname, loginFlag);
        // 系统未登录跳转系统登录地址
        if (!loginFlag && (pathname !== '/login') && reSystemPathname.test(pathname)) {
            return this.props.history.push('/login');
        }
    }*/
   /* componentDidMount() {
        let {
            flag: loginFlag
        } = this.props;
        // console.log('flag:', loginFlag);
        this.flagRedirectTo(loginFlag);
    }*/
   /* componentWillReceiveProps(nextProps) {
        let {
            flag
        } = nextProps;
        // console.log('flag1:', flag);
        this.flagRedirectTo(flag);
    }*/
    render(){
        let key = '';
        try{
            key = this.props.location.pathname.match(/^\/[^/]+/)[0];
        }catch(e){
            key = '';
        }
        console.log(key);
        return(
            renderRoutes(routes, this.props, {location:this.props.location})
        );
    }
}

export default App;

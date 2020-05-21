import axios from 'axios';
import router from '../router/index'
var ui = require('element-ui')
var that=this
const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
    timeout: 5000
});
axios.defaults.headers['Content-Type'] = 'application/json';
service.interceptors.request.use(
    config => {
		config.headers['Content-Type'] = 'application/json';
		if (config.method === 'post') {
			config.headers['Content-Type'] = 'application/json' //  注意：设置很关键
		 }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        }
        else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;

/**
 * 主程序中间件配置
 * @type {session}
 */
const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

module.exports = server => {
    server.use(bodyParser.urlencoded({extended:false})); //配置bodyPaser 以获得post请求参数request.body对象
    server.use(bodyParser.json());  //配置body-parser一定要在挂载路由之前
    server.use('/public/',express.static(path.join(__dirname,'../public/')));  //path.join是自动拼接目录，避免自己拼错
    server.use('/node_modules/',express.static(path.join(__dirname,'../node_modules/')));  //开放目录 __dirname是该文件绝对路径目录，__filename是此文件的绝对路径
    server.use(session({
        secret: 'abcd',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 999999999
        }
    })); //这里设置session的原因只是用于保存生成的验证码 并不会用于用户验证
    server.set('views',path.join(__dirname,'../views/'));  //默认便去views目录寻找 ，若需要修改则在这里修改
    server.setMaxListeners(10); //解决内存泄漏警告  作用是规定相同事件不能绑定超过10个
};
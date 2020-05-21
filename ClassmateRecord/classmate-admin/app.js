/**
 * 主程序配置
 * @type {createApplication}
 */
const express=require('express');
const server=express();
const {connect,initSchema}=require('./database/init'); // 取出定义在init对象中的连接方法和初始化表方法， ES6语法
const routerInit = require('./router.js');
const serverInit = require('./middleware/server');
const authority = require('./middleware/authority');
//执行初始化操作
(async () => {
    await serverInit(server);
    await authority(server);
    await connect();
    await initSchema();
    await routerInit(server);
})();
//设置允许跨域访问该服务.虽然前端已经配置代理但是无法给'/'代理所以静态资源无法请求
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); //当withCredentials为true 也就是请求凭据被允许时 需要指定跨域来源的地址
    res.header('Access-Control-Allow-Headers', "X-Requested-With,Content-Type,Authorization"); // 使用token需设置允许headers中的Authorization通过
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
//绑定启动服务器端口
server.listen(5000,function () {
    console.log('服务器启动成功! 可以通过 http://localhost:5000/ 进行访问!');
});

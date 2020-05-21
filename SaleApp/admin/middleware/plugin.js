const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
module.exports = app => {
    app.use(bodyParser());
    app.use(koaStatic('./')); // 配置静态资源
};
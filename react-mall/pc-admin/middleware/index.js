const koaBody = require('koa-body');
const authorityInit = require('./authority');
const session = require('koa-session');
const koaStatic = require('koa-static');

module.exports = app => {
    app.keys = ['some secret hurr'];
    app.use(koaStatic('./')); // 配置静态资源
    app.use(koaBody({
        patchNode: true
    }));
    app.use(session({
        secret: 'abcd',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 999999999
        }
    }, app));//这里设置session的原因只是用于保存生成的验证码 并不会用于用户验证)

    authorityInit();
};
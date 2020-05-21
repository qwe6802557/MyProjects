/**
 * 总路由处理
 * @type {module:koa-router|Router}
 */
const Router = require('koa-router');
const router = new Router();
const userRouter = require('./router/user');
const wordsRouter = require('./router/words');
const bookRouter = require('./router/book');
const announceRouter = require('./router/announce');

module.exports = app => {
    router.use('/user', userRouter.routes());
    router.use('/words', wordsRouter.routes());
    router.use('/book', bookRouter.routes());
    router.use('/announce', announceRouter.routes());

    app.use(router.routes()).use(router.allowedMethods());
};
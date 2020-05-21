/**
 * 总路由处理
 * @type {module:koa-router|Router}
 */
const Router = require('koa-router');
const router = new Router();
const userRouter = require('./router/user');
const goodsRouter = require('./router/goods');
const cartRouter = require('./router/cart');

module.exports = app => {
    router.use('/user', userRouter.routes());
    router.use('/goods', goodsRouter.routes());
    router.use('/cart', cartRouter.routes());

    app.use(router.routes()).use(router.allowedMethods());
};
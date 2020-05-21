/**
 * 总路由处理
 * @type {module:koa-router|Router}
 */
const Router = require('koa-router');
const router = new Router();
const userRouter = require('./router/user');
const goodsRouter = require('./router/goods');
const commentRouter = require('./router/comment');
const cartRouter = require('./router/cart');
const orderRouter = require('./router/order');

module.exports = app => {
    router.use('/user', userRouter.routes());
    router.use('/goods', goodsRouter.routes());
    router.use('/comment', commentRouter.routes());
    router.use('/cart', cartRouter.routes());
    router.use('/order', orderRouter.routes());

    app.use(router.routes()).use(router.allowedMethods());
};
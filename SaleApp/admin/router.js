/**
 * 总路由处理
 * @type {module:koa-router|Router}
 */
const Router = require('koa-router');
const router = new Router();
const homeRouter = require('./router/home');
const goodsRouter = require('./router/goods');
const adminRouter = require('./router/admin');
module.exports = app => {
  router.use('/home', homeRouter.routes());
  router.use('/goods', goodsRouter.routes());
  router.use('/admin', adminRouter.routes());

  app.use(router.routes()).use(router.allowedMethods());
};
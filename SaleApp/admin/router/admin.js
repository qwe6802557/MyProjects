/**
 * 后台管理分路由
 * @type {module:koa-router|Router}
 */
const Router = require('koa-router');
const router = new Router();
const AdminController = require('../controller/admin');

router.post('/login', async ctx => {
   await AdminController.login(ctx);
});

router.get('/validateCode', async ctx => {
    await AdminController.validateCode(ctx);
});

router.get('/getAllUser', async ctx => {
    await AdminController.getAllUser(ctx);
});

router.post('/getGoodsList', async ctx => {
    await AdminController.getGoodsList(ctx);
});

router.post('/getOrder', async ctx => {
    await AdminController.getOrder(ctx);
});

router.post('/addOrder', async ctx => {
    await AdminController.addOrder(ctx);
});

router.post('/updateOrder', async ctx => {
    await AdminController.updateOrder(ctx);
});

router.post('/deleteOrder', async ctx => {
    await AdminController.deleteOrder(ctx);
});

router.post('/handleOrder', async ctx => {
    await AdminController.handleOrder(ctx);
});

router.post('/handleOnOrOffSell', async ctx => {
    await AdminController.handleOnOrOffSell(ctx);
});

module.exports = router;
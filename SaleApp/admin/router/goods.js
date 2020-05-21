/**
 * 商品管理分路由
 * @type {module:koa-router|Router}
 */
const Router = require('koa-router');
const router = new Router();
const GoodsController = require('../controller/goods');

router.post('/add', async ctx => {
    await GoodsController.addGoods(ctx);
});

router.post('/update', async ctx => {
   await GoodsController.updateGoods(ctx);
});

router.post('/delete', async ctx => {
    await GoodsController.deleteGoods(ctx);
});

router.post('/list', async ctx => {
    await GoodsController.getGoodsList(ctx);
});

router.get('/category', async ctx => {
    await GoodsController.getCategory(ctx);
});

router.get('/categoryGoods', async ctx => {
    await GoodsController.getCategoryGoods(ctx);
});

router.post('/login', async ctx => {
    await GoodsController.login(ctx);
});

router.post('/register', async ctx => {
    await GoodsController.register(ctx);
});

router.post('/updateUser', async ctx => {
    await GoodsController.updateUser(ctx);
});

router.post('/getAddress', async ctx => {
    await GoodsController.getAddress(ctx);
});

router.post('/updateAddress', async ctx => {
    await GoodsController.updateAddress(ctx);
});

router.post('/handleOrder', async ctx => {
    await GoodsController.handleOrder(ctx);
});

router.post('/backOrder', async ctx => {
    await GoodsController.backOrder(ctx);
});

router.get('/getOrder', async ctx => {
    await GoodsController.getAllOrder(ctx);
});

router.post('/deleteOrder/:id', async ctx => {
    await GoodsController.deleteOrder(ctx);
});

router.post('/payOrder', async ctx => {
    await GoodsController.payOrder(ctx);
});

router.post('/getByKeyword', async ctx => {
    await GoodsController.getGoodsByKeyword(ctx);
});

router.post('/commentGoods', async ctx => {
    await GoodsController.getCommentGoods(ctx);
});

router.post('/confirmOrder', async ctx => {
    await GoodsController.confirmOrder(ctx);
});

router.post('/backOrHandleOrder', async ctx => {
    await GoodsController.handleOrBackOrder(ctx);
});

router.post('/checkHandleOrder', async ctx => {
    await GoodsController.checkHandleOrder(ctx);
});

router.post('/backOrders', async ctx => {
    await GoodsController.getBackOrders(ctx);
});

router.post('/comment', async ctx => {
    await GoodsController.commentGoods(ctx)
});
module.exports = router;
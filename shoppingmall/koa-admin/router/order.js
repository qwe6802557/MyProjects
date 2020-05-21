const Router = require('koa-router');
const router = new Router();
const orderController = require("../controller/order");

router.post('/list', async ctx => {
    await orderController.getOrder(ctx);
});

router.post('/add', async ctx => {
    await orderController.addOrder(ctx);
});

router.post('/delete', async ctx => {
    await orderController.deleteOrder(ctx);
});


module.exports = router;
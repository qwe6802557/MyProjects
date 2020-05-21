const Router = require('koa-router');
const router = new Router();
const cartController = require("../controller/cart");

router.post('/list', async ctx => {
    await cartController.getCart(ctx);
});

router.post('/add', async ctx => {
    await cartController.addCart(ctx);
});

router.post('/delete', async ctx => {
    await cartController.deleteCart(ctx);
});

module.exports = router;
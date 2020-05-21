const Router = require('koa-router');
const router = new Router();
const goodsController = require("../controller/goods");

router.post('/category', async ctx => {
    await goodsController.getCategory(ctx);
});

router.post('/list', async ctx => {
    await goodsController.getGoods(ctx);
});


module.exports = router;
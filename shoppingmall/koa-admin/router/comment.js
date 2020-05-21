const Router = require('koa-router');
const router = new Router();
const commentController = require("../controller/comment");

router.post('/list', async ctx => {
    await commentController.getComment(ctx);
});

router.post('/add', async ctx => {
    await commentController.addComment(ctx);
});


module.exports = router;
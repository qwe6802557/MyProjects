const Router = require('koa-router');
const router = new Router();
const bookController = require("../controller/book");

router.post('/list', async ctx => {
    await bookController.getBookList(ctx);
});

router.post('/selfList', async ctx => {
    await bookController.getSelfBooks(ctx);
});

router.post('/category', async ctx => {
    await bookController.getBookCategory(ctx);
});

router.post('/add', async ctx => {
    await bookController.addBook(ctx);
});

router.post('/update', async ctx => {
    await bookController.updateBook(ctx);
});

router.post('/delete', async ctx => {
    await bookController.deleteBook(ctx);
});

router.post('/handle', async ctx => {
    await bookController.buyOrGiveBook(ctx);
});

router.post('/setHot', async ctx => {
    await bookController.setCommentBook(ctx);
});

router.post('/handleMessage', async ctx => {
    await bookController.agreeOrReject(ctx);
});

router.post('/commentBook', async ctx => {
    await bookController.commentBook(ctx);
});

router.post('/message', async ctx => {
    await bookController.getMessageList(ctx);
});

router.post('/confirmMessage', async ctx => {
    await bookController.confirmMessage(ctx);
});

module.exports = router;
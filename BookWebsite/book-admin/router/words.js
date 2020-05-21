const Router = require('koa-router');
const router = new Router();
const wordsController = require("../controller/words");

router.post('/list', async ctx => {
    await wordsController.getWordsList(ctx);
});

router.post('/add', async ctx => {
    await wordsController.addWords(ctx);
});

router.post('/delete', async ctx => {
    await wordsController.deleteWordsList(ctx);
});

module.exports = router;
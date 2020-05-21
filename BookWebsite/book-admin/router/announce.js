const Router = require('koa-router');
const router = new Router();
const announceController = require("../controller/announce");

router.post('/list', async ctx => {
    await announceController.getAnnounceList(ctx);
});

router.post('/add', async ctx => {
    await announceController.addAnnounce(ctx);
});

router.post('/update', async ctx => {
    await announceController.updateAnnounce(ctx);
});

router.post('/delete', async ctx => {
    await announceController.deleteAnnounce(ctx);
});

router.post('/init', async ctx => {
    await announceController.announceInit(ctx);
});

module.exports = router;
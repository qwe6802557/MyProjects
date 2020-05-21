const Router = require('koa-router');
const router = new Router();
const userController = require("../controller/user");

router.post('/sendMail', async ctx => {
      await userController.sendMail(ctx);
});

router.post('/login', async ctx => {
      console.log(ctx.session);
      await userController.login(ctx);
});

router.post('/register', async ctx => {
      await userController.register(ctx);
});

router.post('/position', async ctx => {
      await userController.getPosition(ctx);
});

router.post('/getPoint', async ctx => {
      await userController.getPoint(ctx);
});

module.exports = router;
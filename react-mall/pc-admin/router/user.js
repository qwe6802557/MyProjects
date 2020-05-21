const Router = require('koa-router');
const router = new Router();
const userController = require("../controller/user");

router.get('/getCode', async ctx => {
      await userController.getCode(ctx);
});

router.post('/login', async ctx => {
      await userController.login(ctx);
});

router.post('/register', async ctx => {
      await userController.register(ctx);
});

module.exports = router;
const Router = require('koa-router');
const router = new Router();
const HomeController = require('../controller/home');

router.get('/goods', async (ctx, next)=> {
   ctx.body = {
       code: 0,
       message: '已收到信息',
       messageBody: null
   }
});


module.exports = router;

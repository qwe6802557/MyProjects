const Router = require('koa-router');
const router = new Router();
const userController = require("../controller/user");
const multer = require('koa-multer');
/**
 * 上传图片配置
 * @type {DiskStorage|*}
 */
const storage = multer.diskStorage({
      //文件保存路径
      destination: function (req, file, cb) {
            cb(null, 'public/uploads/')
      },
      //修改文件名称
      filename: function (req, file, cb) {
            const fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
            cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
      }
});
const upload = multer({ storage: storage });

router.get('/getCode', async ctx => {
      await userController.getCode(ctx);
});

router.post('/login', async ctx => {
      await userController.login(ctx);
});

router.post('/register', async ctx => {
      await userController.register(ctx);
});

router.post('/update', async ctx => {
      await userController.updateUser(ctx);
});

router.post('/delete', async ctx => {
      await userController.deleteUser(ctx);
});

router.post('/getInfo', async ctx => {
      await userController.getUserInfo(ctx);
});

router.post('/upload', upload.single('file'),async ctx => {
      console.log(ctx.req.file);
      ctx.body = {
            code: 0,
            message: '上传成功!',
            messageBody: '/public/uploads/' + ctx.req.file.filename//返回文件名
      }
});

router.post('/list', async ctx => {
      await userController.getUserList(ctx);
});

module.exports = router;
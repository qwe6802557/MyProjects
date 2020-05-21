/**
 * 主程序配置
 * @type {createApplication}
 */
const koa = require('koa');
const app = new koa();
const routerInit = require('./router');
const serverInit = require('./middleware/plugin');
const { initSchema } = require('./database/init');
//执行初始化操作
( async () => {
    await initSchema();
    await serverInit(app);
    await routerInit(app);
})();
app.listen(5000, () => {
    console.log('服务器已启动!');
});


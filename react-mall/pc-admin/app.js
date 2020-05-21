/**
 * 主程序配置
 * @type {createApplication}
 */
const koa = require('koa');
const app = new koa();
const { initSchema } = require('./database/index');
const middlewareInit = require('./middleware/index');
const routerInit = require('./router');

//执行初始化操作
( async () => {
    await initSchema();
    await middlewareInit(app);
    await routerInit(app);
})();

app.listen(5000, () => {
    console.log(`服务器已启动,当前运行node版本${process.version},运行端口5000`);
});
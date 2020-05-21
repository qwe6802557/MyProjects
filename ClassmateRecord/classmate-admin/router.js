//根据功能进行分路由处理
const userRouter = require('./router/user');
const mainRouter = require('./router/main');

module.exports = (server) => {
    server.use('/user', userRouter);
    server.use('/main', mainRouter);
};
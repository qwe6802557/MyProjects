const userRouter = require('./router/user');
const importRouter = require('./router/import');
const newsRouter  = require('./router/news');

module.exports = (server) => {
    server.use('/user', userRouter); //根据功能进行分路由处理
    server.use('/import', importRouter);
    server.use('/news', newsRouter);
};
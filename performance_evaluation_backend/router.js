/**
 * 部分模块总路由处理--类似egg.js模式处理
 */
const buildRouter = require('./routes/build');
const profession = require('./routes/profession');
const work = require('./routes/work');

module.exports = app => {
    app.use('/build', buildRouter); //根据功能进行分路由处理
    app.use('/profession', profession);
    app.use('/work', work);
};
const { dbName, username, password, host, port } = require('../config/index').db;
const Sequelize = require('sequelize');

const db = new Sequelize(dbName, username, password, {
    host,
    port,
    dialect: "mysql",
    logging: false
});

db.authenticate().then(() => {
        console.log('mysql数据库已连接...')
    })
    .catch(err => {
        console.error('mysql数据库连接发生错误...', err)
    });

module.exports = {db};
const { db } = require('../db');
const Sequelize = require('sequelize');
const  { encryptPw } = require('../../untils/password');
const { Address } = require('./address');
const { Order } = require('./order');
const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    username: {
        type: Sequelize.STRING,
        field: 'username',
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password'
    },
    type: {
        type: Sequelize.ENUM(['0', '1']),
        allowNull: true,
        defaultValue: '0', // 0 用户  1 管理员
        field: 'type'
    }
});

User.sync({ alter: true });

User.findOne({
    where: {
        username: 'admin'
    },
    raw: true
}).then( res => {
    if (res){
        console.log(`已存在超级管理员,账号：${res.username} 密码：admin`)
    } else {
        encryptPw(10, 'admin').then( res => {
            User.create({
                username: 'admin',
                password: res,
                type: '1'
            });
        });
    }
});
User.associate = function () {
    User.hasMany(Address, { foreignKey: 'user_id' });
    User.hasMany(Order, { foreignKey: 'user_id' });
};

module.exports = { User };
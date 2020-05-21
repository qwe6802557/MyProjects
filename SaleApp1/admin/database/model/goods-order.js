const { db } = require('../db');
const Sequelize = require('sequelize');

const Order = db.define('order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    goods_id: {
        type: Sequelize.INTEGER,
        field: 'goods_id',
        allowNull: false
    },
    order_id: {
        type: Sequelize.INTEGER,
        field: 'order_id',
        allowNull: false
    },
    categoryId: {
        type: Sequelize.INTEGER,
        field: 'categoryId',
        allowNull: false
    },
    order_pic: {
        type: Sequelize.STRING,
        field: 'order_pic',
        allowNull: true,
        defaultValue: '',
    },
    order_name: {
        type: Sequelize.STRING,
        field: 'order_name',
        allowNull: false
    },
    order_num: {
        type: Sequelize.INTEGER,
        field: 'order_num',
        allowNull: false
    },
    order_price: {
        type: Sequelize.DOUBLE,
        field: 'order_price',
        allowNull: false
    },
    order_status: {
        type: Sequelize.ENUM(['0', '1']), // 0 未付款 1 已付款
        field: 'order_status',
        allowNull: true,
        defaultValue: '0'
    },
    order_time: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        field: 'order_time',
        defaultValue: Date.now,
    },
});


Order.sync({ alter: true });

module.exports = { Order };
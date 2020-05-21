/**
 * 退货表
 */
const { db } = require('../db');
const Sequelize = require('sequelize');

const backSell = db.define('back_sell', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    order_id: {
        type: Sequelize.INTEGER,
        field: 'order_id',
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM(['0', '1']), // 0 退货 1 换货
        field: 'type',
        allowNull: false
    },
    back_status: {
        type: Sequelize.ENUM(['0', '1', '2']), // 0 申请中 1 已同意 2 已拒绝
        field: 'back_status',
        allowNull: true,
        defaultValue: '0'
    }
});

backSell.sync({ alter: true });

module.exports = { backSell };
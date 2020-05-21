const { db } = require('../db');
const Sequelize = require('sequelize');
const { User }  = require('./user');
const { Goods }  = require('./goods');

const Order = db.define('order', {
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
    goods_id: {
        type: Sequelize.INTEGER,
        field: 'goods_id',
        allowNull: false
    }
});

Order.associate = function () {
    Order.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });
    Order.belongsTo(Goods, { foreignKey: 'goods_id', targetKey: 'id' });
};

Order.sync({ alter: true });

module.exports = { Order };
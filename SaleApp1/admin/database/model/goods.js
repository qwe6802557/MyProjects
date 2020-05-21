const { db } = require('../db');
const Sequelize = require('sequelize');

const Goods = db.define('goods', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'categoryId',
    },
    goodsName: {
        type: Sequelize.STRING,
        field: 'goodsName',
        allowNull: false
    },
    goodsPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'goodsPrice',
    },
    goodsInfo: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'goodsInfo',
        defaultValue: ''
    },
    goodsPic: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'goodsPic'
    }
});

Goods.association = function () {
    Goods.hasMany(Goods, { foreignKey: 'user_id' });
};

Goods.sync({ alter: true });

module.exports = { Goods };
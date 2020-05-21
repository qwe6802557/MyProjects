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
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'goodsPic'
    },
    goodsNum: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: 'goodsNum',
        defaultValue: 0
    },
    isComment: {
        type: Sequelize.ENUM(['0', '1']),  // 是否为推荐 0 不推荐 1 推荐
        allowNull: true,
        field: 'isComment',
        defaultValue: '0'
    },
    isOnSell: {
        type: Sequelize.ENUM(['0', '1']),  // 是否上架 0 上架 1 下架
        allowNull: true,
        field: 'isOnSell',
        defaultValue: '0'
    }
});

Goods.association = function () {
    Goods.hasMany(Goods, { foreignKey: 'user_id' });
};

Goods.sync({ alter: true });

module.exports = { Goods };
const { db } = require('../db');
const Sequelize = require('sequelize');
const { User }  = require('./user');

const Address = db.define('address', {
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
    userName: {
        type: Sequelize.STRING,
        field: 'userName',
        allowNull: false
    },
    userPhone: {
        type: Sequelize.STRING,
        field: 'userPhone',
        allowNull: true
    },
    userCode: {
        type: Sequelize.STRING,
        field: 'userCode',
        allowNull: true
    },
    userAddress: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'userAddress',
        defaultValue: ''
    },
    is_default: {
        type: Sequelize.ENUM(['0', '1']),
        allowNull: true,
        field: 'is_default',
        defaultValue: '0'  // 0不是默认地址  // 1是默认地址
    },
});

Address.associate = function () {
    Address.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });
};

Address.sync({ alter: true });

module.exports = { Address };
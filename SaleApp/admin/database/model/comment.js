const { db } = require('../db');
const Sequelize = require('sequelize');

const Comment = db.define('comment', {
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
    user_id: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        field: 'comment',
        allowNull: true
    },
    score: {
        type: Sequelize.INTEGER,
        field: 'score',
        allowNull: true,
        defaultValue: 0
    }
});

Comment.sync({ alter: true });

module.exports = { Comment };
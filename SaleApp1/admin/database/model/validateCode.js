const { db } = require('../db');
const Sequelize = require('sequelize');

const ValidateCode = db.define('validateCode', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    validate_text: {
        type: Sequelize.STRING,
        field: 'validate_text',
        allowNull: false
    },
    validate_time: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        field: 'validate_time',
        defaultValue: Date.now,
    },
});

ValidateCode.sync({ alter: true });

module.exports = { ValidateCode };
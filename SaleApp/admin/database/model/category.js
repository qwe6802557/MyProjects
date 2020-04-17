const { db } = require('../db');
const Sequelize = require('sequelize');

const Category = db.define('category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    categoryName: {
        type: Sequelize.STRING,
        field: 'categoryName',
        allowNull: false
    },
    categoryPic: {
        type: Sequelize.STRING,
        field: 'categoryPic',
        allowNull: true
    },
    categoryInfo: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'categoryInfo',
        defaultValue: ''
    }
});

const categoryArr = [{id: 1, categoryName: '热门'},  {id: 2,categoryName: '童鞋'}, {id: 3, categoryName: '母婴'}, {id: 4, categoryName: '玩具'}, {id: 5, categoryName: '零食'}, {id: 6, categoryName: '图书'},{id: 7, categoryName: '男童装'}, {id: 8, categoryName: '女童装'}];

Category.sync({ alter: true });

Category.findOne({
    raw: true,
}).then( res => {
    !res && Category.bulkCreate(categoryArr);
});

module.exports = { Category };
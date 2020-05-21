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

const categoryArr = [
    {id: 1, categoryName: '热门', categoryPic: 'http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408113048_1276.png',},
    {id: 2, categoryName: '酒类', categoryPic: 'http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408112010_4489.png',},
    {id: 3, categoryName: '甜品', categoryPic: 'http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408113102_1595.png'},
    {id: 4, categoryName: '生活', categoryPic: 'http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408112053_8191.png'},
    {id: 5, categoryName: '饮料', categoryPic: 'http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408113048_1276.png'},
    {id: 6, categoryName: '图书', categoryPic: 'http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408112010_4489.png'},
    {id: 7, categoryName: '服装', categoryPic: 'http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408113102_1595.png'},
    {id: 8, categoryName: '培训', categoryPic: 'http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408112053_8191.png'},];

Category.sync({ alter: true });

Category.findOne({
    raw: true,
}).then( res => {
    !res && Category.bulkCreate(categoryArr);
});

module.exports = { Category };
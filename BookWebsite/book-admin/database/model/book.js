/**
 * 图书表
 */
module.exports = (db, Sequelize) => {
    const Book = db.define('book', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        userId: {
            type: Sequelize.INTEGER,
            field: 'userId',
            allowNull: false,
        },
        categoryId: {  // 外键 目录ID
            type: Sequelize.INTEGER,
            field: 'categoryId',
            allowNull: false,
        },
        bookName: {
            type: Sequelize.STRING,
            field: 'bookName',
            allowNull: false
        },
        bookPic: {
            type: Sequelize.STRING,
            field: 'bookPic',
            allowNull: false
        },
        bookQuality: {
            type: Sequelize.INTEGER,
            field: 'bookQuality',
            allowNull: false
        },
        bookOriginPrice: {
            type: Sequelize.INTEGER,
            field: 'bookOriginPrice',
            allowNull: false
        },
        bookSellPrice: {
            type: Sequelize.INTEGER,
            field: 'bookSellPrice',
            allowNull: false
        },
        publishHouse: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'publishHouse'
        },
        bookAuthor: {
            type:  Sequelize.STRING,
            allowNull: false,
            field: 'bookAuthor'
        },
        bookStatus: {
            type: Sequelize.ENUM(['0', '1', '2',]),
            allowNull: true,
            defaultValue: '0', // 0 共享中 1 已赠送 2 已销售
            field: 'bookStatus'
        },
        isHot: {
            type: Sequelize.ENUM([ '0', '1']),
            allowNull: true,
            defaultValue: '0', // 0 非推荐 1 推荐
            field: 'isHot'
        }
    });

    return Book;
};
/**
 * 图书目录
 */
module.exports = (db, Sequelize) => {
    const BookCategory = db.define('book_category', {
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
    });

    return BookCategory;
};
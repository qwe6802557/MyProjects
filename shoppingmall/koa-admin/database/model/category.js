/**
 * 目录表
 */
module.exports = (db, Sequelize) => {
    const Category = db.define('category', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        categoryName: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'categoryName'
        },
    });

    return Category;
};
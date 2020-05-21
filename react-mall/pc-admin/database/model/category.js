/**
 * 目录表
 */
module.exports = (db, Sequelize) => {
    const category = db.define('category', {
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

    return category;
};
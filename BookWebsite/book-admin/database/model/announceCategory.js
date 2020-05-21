/**
 * 公告目录
 */
module.exports = (db, Sequelize) => {
    const AnnounceCategory = db.define('announce_category', {
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

    return AnnounceCategory;
};
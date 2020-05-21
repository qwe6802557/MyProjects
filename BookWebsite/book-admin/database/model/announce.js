/**
 * 公告表
 */
module.exports = (db, Sequelize) => {
    const Announce = db.define('announce', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'categoryId',
        },
        announceTitle: {
            type: Sequelize.STRING,
            field: 'announceTitle',
            allowNull: false
        },
        announceStatus: {
            type: Sequelize.ENUM(['0', '1']), // 0 未执行 1执行中
            field: 'announceStatus',
            allowNull: false
        },
        announceContent: {
            type: Sequelize.STRING,
            field: 'announceContent',
            allowNull: false
        },
    });

    return Announce;
};
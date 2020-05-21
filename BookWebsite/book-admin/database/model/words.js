/**
 * 用户留言表
 */
module.exports = (db, Sequelize) => {
    const Words = db.define('words', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        userId: {
            type: Sequelize.INTEGER,
            field: 'userId',
            allowNull: false
        },
        words: {
            type: Sequelize.STRING,
            field: 'words',
            allowNull: false
        },
        wordsType: {
            type: Sequelize.ENUM(['0', '1', '2']), // 0 求书 1 晒书 2 推荐书
            field: 'wordsType',
            allowNull: false
        }
    });

    return Words;
};
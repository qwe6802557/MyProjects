/**
 * 评论表
 */
module.exports = (db, Sequelize) => {
    const comment = db.define('comment', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        goodsId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'goodsId'
        },
        userEmail: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'userEmail'
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'comment'
        },
        score: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'score'
        }
    });

    return comment;
};
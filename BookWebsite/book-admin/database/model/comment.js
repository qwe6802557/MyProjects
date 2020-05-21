/**
 * 评论表
 */
module.exports = (db, Sequelize) => {
    const Comment = db.define('comment', {
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
        bookId: {
            type: Sequelize.INTEGER,
            field: 'bookId',
            allowNull: false,
        },
        comment: {
            type: Sequelize.STRING,
            field: 'comment',
            allowNull: false,
        },
    });

    return Comment;
};
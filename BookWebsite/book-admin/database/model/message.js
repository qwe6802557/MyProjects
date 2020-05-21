/**
 * 消息表
 */
module.exports = (db, Sequelize) => {
    const Message = db.define('message', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'userId',
        },
        bookId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'bookId',
        },
        friendId: {
            type: Sequelize.INTEGER,
            field: 'friendId',
            allowNull: false
        },
        messageType: {
            type: Sequelize.ENUM(['0', '1', '2']), // 0 请求中 1同意 2拒绝
            field: 'messageType',
            allowNull: true,
            defaultValue: '0'
        },
        requestType: {
            type: Sequelize.ENUM(['0', '1']), // 0 购买 1索要
            field: 'requestType',
            allowNull: true,
            defaultValue: '0'
        },
        messagePhone: {
            type: Sequelize.STRING,
            field: 'messagePhone',
            allowNull: true,
            defaultValue: ''
        },
        messageTitle: {
            type: Sequelize.STRING,
            field: 'messageTitle',
            allowNull: true,
            defaultValue: ''
        },
        messageContent: {
            type: Sequelize.STRING,
            field: 'messageContent',
            allowNull: true,
            defaultValue: ''
        },
    });

    return Message;
};
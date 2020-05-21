/**
 * 购买或赠送录表
 */
module.exports = (db, Sequelize) => {
    const Record = db.define('record', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        bookId: {
            type: Sequelize.INTEGER,
            field: 'bookId',
            allowNull: false,
        },
        recordType: {
            type: Sequelize.ENUM([ '0', '1']), // 0 购买 1赠送
            field: 'recordType',
            allowNull: true,
            defaultValue: '0'
        },
        userId: {
            type: Sequelize.INTEGER,
            field: 'userId',
            allowNull: false,
        },
        friendId: {  // 外键 目录ID
            type: Sequelize.INTEGER,
            field: 'friendId',
            allowNull: false,
        },
    });

    return Record;
};
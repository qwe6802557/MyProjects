/**
 * 临时储存表
 */
module.exports = (db, Sequelize) => {
    const Code = db.define('code', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'email'
        },
        code: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'code'
        }
    });

    return Code;
};
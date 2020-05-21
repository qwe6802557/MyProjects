/**
 * 用户表
 */
module.exports = (db, Sequelize) => {
    const User = db.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'username'
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '0', // 0 用户  1 管理员
            field: 'password'
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'email'
        }
    });

    return User;
};
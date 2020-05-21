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
        avatar: {
            type: Sequelize.STRING,
            field: 'avatar',
            allowNull: true
        },
        username: {
            type: Sequelize.STRING,
            field: 'username',
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            field: 'age',
            allowNull: false
        },
        sex: {
            type: Sequelize.ENUM(['0', '1']), // 0 男 1 女
            field: 'sex',
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'password'
        },
        email: {
            type:  Sequelize.STRING,
            allowNull: false,
            field: 'email'
        },
        address: {
            type:  Sequelize.STRING,
            allowNull: true,
            field: 'address'
        },
        identity: {
            type: Sequelize.ENUM(['0', '1']),
            allowNull: true,
            defaultValue: '0', // 0 用户  1 管理员
            field: 'identity'
        }
    });

    return User;
};
/**
 * 购物车表
 */
module.exports = (db, Sequelize) => {
    const Cart = db.define('cart', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        userEmail: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'userEmail'
        },
        goodsId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'goodsId'
        },
        goodsNum: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'goodsNum'
        },
        goodsSize: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'goodsSize'
        },
        goodsCost: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'goodsCost'
        }
    });

    return Cart;
};
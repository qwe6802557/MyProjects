/**
 * 购物车表
 */
module.exports = (db, Sequelize) => {
    const cart = db.define('cart', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        goodsId: {
            type: Sequelize.INTEGER,
            field: 'goodsId',
            allowNull: false
        },
        goodsNum: {
            type: Sequelize.INTEGER,
            field: 'goodsNum',
            allowNull: false
        },
        goodsSize: {
            type: Sequelize.STRING,
            field: 'goodsSize',
            allowNull: false
        },
        goodsCost: {
            type: Sequelize.INTEGER,
            field: 'goodsCost',
            allowNull: false
        }
    });

    return cart;
};
/**
 * 商品表
 */
module.exports = (db, Sequelize) => {
    const Goods = db.define('goods', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'categoryId'
        },
        goodsName: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'goodsName'
        },
        goodsInfo: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'goodsInfo'
        },
        goodsPic: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'goodsPic'
        },
        goodsPrice: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'goodsPrice'
        }
    });

    return Goods;
};
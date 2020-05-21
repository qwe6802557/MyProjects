/**
 * 商品表
 */
module.exports = (db, Sequelize) => {
    const goods = db.define('goods', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        categoryId: {
            type: Sequelize.INTEGER,
            field: 'categoryId',
            allowNull: false
        },
        goodsName: {
            type: Sequelize.STRING,
            field: 'goodsName',
            allowNull: false
        },
        goodsPic: {
            type: Sequelize.STRING,
            field: 'goodsPic',
            allowNull: false
        },
        goodsInfo: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'goodsInfo'
        },
        goodsPrice: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            field: 'goodsPrice'
        }
    });

    return goods;
};
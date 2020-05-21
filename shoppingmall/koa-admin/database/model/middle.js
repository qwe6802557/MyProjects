/**
 * 订单中间表
 */
module.exports = (db, Sequelize) => {
    const middle = db.define('middle', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        orderId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'orderId'
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
        goodsCost: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'goodsCost'
        },
        goodsSize: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'goodsSize'
        }
    });

    return middle;
};
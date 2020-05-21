/**
 * 订单表
 */
module.exports = (db, Sequelize) => {
    const Order = db.define('order', {
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
        orderStatus: {
            type: Sequelize.ENUM(['0', '1']),   // 0 未付款 1 已付款
            allowNull: true,
            field: 'orderStatus',
            defaultValue: '0'
        },
        orderCost: {
            type: Sequelize.INTEGER,   // 0 未付款 1 已付款
            allowNull: false,
            field: 'orderCost',
        }
    });

    return Order;
};
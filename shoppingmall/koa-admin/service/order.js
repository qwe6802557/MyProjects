/**
 * 订单service
 */

const { order, code, middle, goods, cart } = require('../database/index').models;
class OrderService {
    /**
     * 获取订单列表
     * @returns {Promise<any>}
     */
    static async getOrder() {
        const result_user = await code.findOne({
            raw: true,
        });

        const result_order = await order.findAll({
            where: {
                userEmail: result_user.email,
            },
            raw: true
        });

        for (const item of result_order){
            const result_middle = await middle.findAll({
                where: {
                    orderId: item.id
                },
                include: goods,
                raw: true
            });

            item.goodsList = result_middle;
        }

        return result_order;
    }

    /**
     * 创建订单
     * @param ctx
     * @returns {Promise<boolean>}
     */
    static async addOrder(ctx) {
        const { goodsList } = ctx.request.body;
        const result_user = await code.findOne({
           raw: true,
        });

        const goodsCostList = goodsList.map(item => item.goodsCost);
        const orderCost = goodsCostList.reduce((total, item) => total + item);

        const result_order = await order.create({
            userEmail: result_user.email,
            orderCost,
        }, {
            raw: true
        });

        for (const item of goodsList){
            item.orderId = result_order.dataValues.id;

            item.cartId && await cart.destroy({
                where: {
                    id: item.cartId
                }
            });
        }

        await middle.bulkCreate(goodsList);

        return true;
    }

    /**
     * 删除订单
     * @param ctx
     * @returns {Promise<boolean>}
     */
    static async deleteOrder(ctx) {
        const {  id  } = ctx.request.body;

        await middle.destroy({
            where: {
                orderId: id,
            },
            raw: true,
        });

        await order.destroy({
            where: {
                id,
            },
            raw: true,
        });

        return true;
    }
}

module.exports = OrderService;
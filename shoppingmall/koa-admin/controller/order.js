
const orderService = require('../service/order');
class orderController {
    // 获取订单列表
    static async getOrder(ctx) {

        try {
            const result = await orderService.getOrder();

            ctx.body = {
                code : 0,
                message: '查询成功!',
                messageBody: result
            };
        }catch (e) {
            ctx.body = {
                code : 5,
                message: '查询失败!',
                messageBody: null
            };

            throw e;
        }
    }

    // 新增订单
    static async addOrder (ctx) {

        try {
            await orderService.addOrder(ctx);

            ctx.body = {
                code : 0,
                message: '加入购物车成功!可到我的购物车进行查看',
                messageBody: null
            };
        }catch (e) {
            ctx.body = {
                code : 5,
                message: '评论失败!',
                messageBody: null
            };
            throw e;
        }
    }

    // 删除购物车
    static async deleteOrder (ctx) {

        try {
            await orderService.deleteOrder(ctx);

            ctx.body = {
                code : 0,
                message: '删除成功!',
                messageBody: null
            };
        }catch (e) {
            ctx.body = {
                code : 5,
                message: '删除失败!',
                messageBody: null
            };
            throw e;
        }
    }
}

module.exports = orderController;
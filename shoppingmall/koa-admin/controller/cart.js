
const cartService = require('../service/cart');
class CartController {
    // 获取购物车列表
    static async getCart(ctx) {

        try {
            const result = await cartService.getCart();

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
        }
    }

    // 新增购物车
    static async addCart (ctx) {

        try {
            await cartService.addCart(ctx);

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
    static async deleteCart (ctx) {

        try {
            await cartService.deleteCart(ctx);

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

module.exports = CartController;
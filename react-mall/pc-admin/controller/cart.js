/**
 * 购物车管理 controller
 */
const cartService = require('../service/cart');
class CartController {

    static async getCart (ctx) {
        try {
            const result = await cartService.getCart();
            ctx.body = { code: 0, message: '查询成功!', messageBody: result};
        }catch (e) {
            ctx.body = { code: 0, message: '查询失败!', messageBody: null};
            throw e;
        }
    }

    static async addCart (ctx) {
        try {
            await cartService.addCart(ctx);
            ctx.body = { code: 0, message: '添加购物车成功!', messageBody: null};
        }catch (e) {
            ctx.body = { code: 0, message: '添加购物车失败!', messageBody: null};
            throw e;
        }
    }

    static async deleteCart (ctx) {
        try {
            await cartService.deleteCart(ctx);
            ctx.body = { code: 0, message: '删除成功!', messageBody: null};
        }catch (e) {
            ctx.body = { code: 0, message: '删除失败!', messageBody: null};
            throw e;
        }
    }
}

module.exports = CartController;
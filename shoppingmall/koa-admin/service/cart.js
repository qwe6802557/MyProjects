/**
 * 购物车service
 */
const { cart, goods, code } = require('../database/index').models;
class CartService {
    /**
     * 获取购物车列表
     * @returns {Promise<any>}
     */
    static async getCart() {
        const result_user = await code.findOne({
            raw: true,
        });

        const result = await cart.findAll({
            where: {
              userEmail: result_user.email
            },
            include: goods,
            raw: true
        });

        return result;
    }

    /**
     * 加入购物车
     * @param ctx
     * @returns {Promise<boolean>}
     */
    static async addCart(ctx) {
        const {  goodsId, goodsNum, goodsSize } = ctx.request.body;
        const result_user = await code.findOne({
            raw: true,
        });

        const result_goods = await goods.findOne({
            where: {
                id: goodsId
            },
            raw: true,
        });

        const goodsCost = result_goods.goodsPrice * goodsNum;
        await cart.create({
            goodsId,
            goodsNum,
            goodsCost,
            goodsSize,
            userEmail: result_user.email
        });
        return true;
    }

    static async deleteCart(ctx) {
        const {  id } = ctx.request.body;

        await cart.destroy({
            where: {
                id,
            },
            raw: true,
        });

        return true;
    }
}

module.exports = CartService;
/**
 * 购物车管理 service
 */
const { goods, cart } = require('../database/index').models;

class CartService {

    static async getCart(){
        const result = await cart.findAll({
            raw: true,
            include: goods
        });

        return result;
    }

    static async addCart (ctx) {
        const { goodsId, goodsNum, goodsSize } = ctx.request.body;
        const result_goods = await goods.findOne({
            where: {
                id: goodsId,
            },
            raw: true,
        });

        const goodsCost = result_goods.goodsPrice * goodsNum;
        const result = await cart.create({
            goodsId,
            goodsNum,
            goodsSize,
            goodsCost
        });

        return  result;
    }

    static async deleteCart (ctx) {
        const { id } = ctx.request.body;
        const result = await cart.destroy({
            where: {
                id
            }
        });

        return  result;
    }
}

module.exports = CartService;
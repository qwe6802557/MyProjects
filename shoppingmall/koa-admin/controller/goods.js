
const goodsService = require('../service/goods');
class GoodsController {
    // 获取目录
    static async getCategory (ctx) {

        try {
            const result = await goodsService.getCategory();

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

    // 获取商品
    static async getGoods (ctx) {

        try {
            const result = await goodsService.getGoods(ctx);

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
}

module.exports = GoodsController;
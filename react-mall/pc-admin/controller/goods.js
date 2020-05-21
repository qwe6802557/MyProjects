/**
 * 商品管理 controller
 */
const goodsService = require('../service/goods');
class GoodsController {

    static async getGoods (ctx) {
        try {
            const result = await goodsService.getGoods();
            ctx.body = { code: 0, message: '查询成功!', messageBody: result};
        }catch (e) {
            ctx.body = { code: 0, message: '查询失败!', messageBody: null};
            throw e;
        }
    }

}

module.exports = GoodsController;
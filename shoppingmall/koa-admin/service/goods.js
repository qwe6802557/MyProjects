/**
 * 商品service
 */
const { category, goods } = require('../database/index').models;
class GoodsService {
    
    static async getCategory() {
        const result = await category.findAll({
            raw: true
        });

        return result;
    }
    
    static async getGoods(ctx) {
        const { categoryId, curPage, pageSize } = ctx.request.body;

        const offset = (curPage - 1) * pageSize;
        const limit = pageSize;

        const result = await goods.findAndCountAll({
            where: {
                categoryId,
            },
            offset,
            limit,
            raw: true
        });

        return result;
    }
    
}

module.exports = GoodsService;
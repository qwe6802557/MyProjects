/**
 * 商品管理 service
 */
const { goods } = require('../database/index').models;

class GoodsService {
   static async getGoods () {
       const result = await goods.findAll({
           raw: true
       });

       return  result;
   }
}

module.exports = GoodsService;
/**
 * 商品管理service层
 */
const { Goods } = require('../database/model/goods');
const { Category } = require('../database/model/category');
const { Address } = require('../database/model/address');
const { Order } = require('../database/model/order');
const { User } = require('../database/model/user');
const  { encryptPw, decryptPw } = require('../untils/password');
const { jwtBorn, jwtValidate } = require('../untils/jwt');
const Sequelize = require('sequelize');

class GoodsService {

    static async getGoodsList (ctx) {
        const { categoryId, goodsName, currentPage, pageSize } = ctx.request.body;
        const searchCondition = {};

        const offset = (currentPage - 1) * pageSize;
        const limit = parseInt(pageSize);

        !!categoryId && Object.defineProperty(searchCondition, 'categoryId', {
            value: {
                [Sequelize.Op.like]: `%${categoryId}%`
            },
            writable: true,
            enumerable: true,
        });

        !!goodsName && Object.defineProperty(searchCondition, 'goodsName', {
            value: {
                [Sequelize.Op.like]: `%${goodsName}%`
            },
            writable: true,
            enumerable: true,
        });

        const result = await Goods.findAndCountAll({
            where: searchCondition,
            raw: true,
            limit,
            offset,
        });

        for (const item of result.rows){
            const category = await Category.findOne({
                where: {
                    id: item.categoryId,
                },
                raw: true,
            });

            category.categoryId = category.id;
            delete category.id;
            Object.assign(item, category);
        }

        return result;
    }

    static async getCategoryGoods (ctx) {
        const { categoryId } = ctx.query;

        const result = await Goods.findAll({
            where: {
                categoryId,
            },
            raw: true
        });

        console.log(result);

        return result;
    }

    static async getCategory (ctx) {

        const result = await Category.findAll({
            raw: true
        });

        return result;
    }

    static async addGoods (ctx) {
        await Goods.create(ctx.request.body);
    }

    static async deleteGoods (ctx) {
        const { ids } = ctx.request.body;
        await Goods.destroy({
            where: {
                id: ids
            }
        });
    }

    static async updateGoods (ctx) {

        const { id } = ctx.request.body;
        await Goods.update(ctx.request.body, {
            where: {
                id
            }
        });
    }

    static async login (ctx) {
        const { username, password } = ctx.request.body;

        try {
            const result_user = await User.findOne({
                where: {
                    username,
                },
                raw: true,
            });
            if (!result_user){
                return {
                    code: 2,
                    data: null
                };
            }
            const _password = result_user.password;

            const result_validate = await decryptPw(password, _password);
            if (!result_validate){
                return {
                    code: 1,
                    data: null
                };
            } else {
                const token = jwtBorn(result_user);

                return {
                    code: 0,
                    data: result_user,
                    token,
                };
            }
        }catch (e) {
            console.log(e);
            return {
                code: 5,
                data: null
            };
        }
    }

    static async register (ctx) {
        const { username, password } = ctx.request.body;
        let result = {};
        const result_user = await User.findOne({
            where: {
                username,
            },
            raw: true,
        });

        if (result_user){
            return {
                code: 1,
                data: null
            };
        } else {
            const result_enCry = await encryptPw(10, password);
            result = await User.create({
                username,
                password: result_enCry
            }, {
                raw: true
            });

            const token = jwtBorn(result);

            return {
                code: 0,
                data: result,
                token
            };
        }
    }

    static async updateUser (ctx) {
        const { id,  username } = ctx.request.body;

        try {
            const password = await encryptPw(5, ctx.request.body.password);
            await User.update({
                username,
                password,
            }, {
                where: {
                    id
                },
                raw: true
            });

            const result = await User.findOne({
                where: {
                    id
                },
                raw: true
            });

            const token = await jwtBorn(result);

            return {
                    code: 0,
                    data: result,
                    token,
            };
        }catch (e) {
            return {
                code: 5,
                data: null
            };
            throw e;
        }
    }

   static async updateAddress (ctx) {
        const { userName, userPhone, userAddress, userCode, user_id, is_default } = ctx.request.body;

         await Address.create({
             userName,
             userPhone,
             userAddress,
             userCode,
             user_id,
             is_default
         });

         return true;
    }

    static async getAddress (ctx) {
        const { id } = ctx.request.body;

        const result = await Address.findOne({
            where: {
                user_id: id,
            },
            raw: true,
        });

        return result;
    }

    static async getAllOrder(ctx) {
        const { id, order_status } = ctx.query;

        const searchCondition = {};

        !!id && Object.defineProperty(searchCondition, 'user_id', {
            value: id,
            writable: true,
            enumerable: true,
        });

        !!order_status && Object.defineProperty(searchCondition, 'order_status', {
            value: order_status,
            writable: true,
            enumerable: true,
        });

        const result = await Order.findAll({
            where: searchCondition,
            raw: true,
        });

        return result;
    }

    static async handleOrder(ctx) {
        const { orderList } = ctx.request.body;

        await Order.bulkCreate(orderList);

        return true;
    }

    static async deleteOrder(ctx) {
        const { id } = ctx.params;

        await Order.destroy({
            where: {
                id,
            }
        });

        return true;
    }

    static async payOrder (ctx) {
        const { ids } = ctx.request.body;

        await Order.update({
            order_status: '1'
        }, {
            where: {
                id: ids
            }
        });

        return true;
    }

    static async getGoodsByKeyword (ctx) {
        const { keyword } = ctx.request.body;
        const result = await Goods.findAll({
            where: {
                goodsName: {
                    [Sequelize.Op.like]: `%${keyword}%`
                }
            },
            raw: true,
        });

        return result;
    }
}

module.exports = GoodsService;
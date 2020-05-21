/**
 * 商品管理service层
 */
const { Goods } = require('../database/model/goods');
const { Category } = require('../database/model/category');
const { Address } = require('../database/model/address');
const { Order } = require('../database/model/order');
const { User } = require('../database/model/user');
const  { decryptPw } = require('../untils/password');
const { jwtBorn } = require('../untils/jwt');
const { ValidateCode } = require('../database/model/validateCode');
const svgCaptcha = require('svg-captcha');
const Sequelize = require('sequelize');

class AdminService {

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

    /*static async getGoodsList (ctx) {
        const { goodsName } = ctx.query;
        let result = [];
        if (goodsName){
            result = await Goods.findAll({
                where: {
                    goodsName: {
                        [Sequelize.Op.like]: `%${goodsName}%`
                    }
                },
                raw: true
            });
        } else {
            result = await Goods.findAll({
                raw: true
            });
        }
        return result;
    }

    static async getCategoryGoods (ctx) {
        const { categoryId } = ctx.query;

        return await Goods.findAll({
            where: {
                categoryId,
            },
            raw: true
        })
    }*/

    static async getCategoryGoods (ctx) {
        const { categoryId } = ctx.query;

        const result = await Goods.findAll({
            where: {
                categoryId,
            },
            raw: true
        });

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
        const { id } = ctx.request.body;
        await Goods.destroy({
            where: {
                id
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

    static async validateCode () {
        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 40,
            background: '#cc9966',
        });

        await ValidateCode.destroy({
                where: {
                }
            });

        await ValidateCode.create({
            validate_text: captcha.text,
        });

        return captcha;
    }

    static async login (ctx) {
        const { username, password, validateCode } = ctx.request.body;

        try {
            const verifyCode = await ValidateCode.findOne({
                where: {}
            });
            if (validateCode.toLowerCase() !== verifyCode.validate_text.toLowerCase()){
                return {
                    code: 3,
                    message: '验证码不正确!',
                    messageBody: null
                }
            }
            const result_user = await User.findOne({
                where: {
                    username,
                    type: '1',
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

    static async getAllUser () {
        const result = await User.findAll({
            where: {
                type: '0',
            },
            raw: true,
        });

        return result;
    }

    static async getOrder (ctx) {
        const searchCondition = {};
        const { id, user_id, currentPage, pageSize } = ctx.request.body;

        const offset = (currentPage - 1) * pageSize;
        const limit = parseInt(pageSize);

        !!id && Object.defineProperty(searchCondition, 'id', {
            value: {
                [Sequelize.Op.like]: `%${id}%`
            },
            writable: true,
            enumerable: true,
        });

        !!user_id && Object.defineProperty(searchCondition, 'user_id', {
            value: {
                [Sequelize.Op.like]: `%${user_id}%`
            },
            writable: true,
            enumerable: true,
        });

        const result = await Order.findAndCountAll({
            where: searchCondition,
            raw: true,
            limit,
            offset,
        });

        if (result.count > 0){
            for (const item of result.rows){
                const user = await User.findOne({
                    where: {
                        id: item.user_id,
                    },
                    raw: true,
                });

                user.user_id = user.id;
                delete user.id;
                Object.assign(item, user);
            }
        }

        return result;
    }

    static async addOrder (ctx) {
        const { categoryId, goods_id, user_id, order_num } = ctx.request.body;

        const goods = await Goods.findOne({
            where: {
                id: goods_id,
            },
            raw: true
        });

        await Order.create({
            categoryId,
            goods_id,
            user_id,
            order_num,
            order_price: goods.goodsPrice,
            order_name: goods.goodsName
        });


        return true;
    }

    static async updateOrder (ctx) {
        const { id, categoryId, goods_id, user_id, order_num } = ctx.request.body;
        let order_name = '';
        if (goods_id){
            const result = await Goods.findOne({
                where: {
                    id: goods_id,
                },
                raw: true,
            });

            order_name = result.goodsName;
        }

        await Order.update({
            categoryId,
            goods_id,
            user_id,
            order_num,
            order_name,
        }, {
            where: {
                id
            },
        });

        return true;
    }

    static async deleteOrder (ctx) {
        const { ids } = ctx.request.body;

        await Order.destroy({
           where: {
               id: ids
           }
        });

        return true;
    }

    static async handleOrder (ctx) {
        const { id } = ctx.request.body;

        const result_order = await Order.findOne({
            where: {
                id
            },
            raw: true
        });

        const result_goods = await Goods.findOne({
           where: {
               id: result_order.goods_id
           },
            raw: true,
        });

        await Goods.update({
            goodsNum: result_goods.goodsNum - result_order.order_num
        }, {
            where: {
                id: result_order.goods_id
            }
        });

        await Order.update({
            order_status: '2'
        }, {
            where: {
                id
            }
        });

        return true;
    }
    // 商品 上下架
    static async handleOnOrOffSell(ctx){
        const { id, type } = ctx.request.body;

        await Goods.update({
            isOnSell: type.toString()
        }, {
            where: {
                id
            }
        });

        return true;
    }
}

module.exports = AdminService;
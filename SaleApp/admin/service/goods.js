/**
 * 商品管理service层
 */
const { Goods } = require('../database/model/goods');
const { Category } = require('../database/model/category');
const { Address } = require('../database/model/address');
const { Order } = require('../database/model/order');
const { User } = require('../database/model/user');
const { Comment } = require('../database/model/comment');
const { backSell } = require('../database/model/backSell');
const  { encryptPw, decryptPw } = require('../untils/password');
const { jwtBorn } = require('../untils/jwt');
const Sequelize = require('sequelize');
const moment = require('moment');

class GoodsService {

    static async getGoodsList (ctx) {
        const { categoryId, goodsName, currentPage, pageSize } = ctx.request.body;
        const searchCondition = { isOnSell: '0' };

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

            const comment = await Comment.findAll({
                where: {
                    goods_id: item.id,
                },
                raw: true,
            });

            if (comment.length > 0){
                for (const cItem of comment){
                    const userInfo = await User.findOne({
                        where: {
                            id: cItem.user_id
                        },
                        attributes: 'username',
                        raw: true,
                    });
                    cItem.username = userInfo.username;
                    cItem.createAt = moment(cItem.createAt).format('YYYY-MM-DD hh:mm:ss');
                }
            }

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
                isOnSell: '0'
            },
            raw: true
        });

        for (const item of result ) {
            const comment = await Comment.findAll({
                where: {
                    goods_id: item.id,
                },
                raw: true,
            });

            if (comment.length > 0){
                for (const cItem of comment){
                    const userInfo = await User.findOne({
                        where: {
                            id: cItem.user_id
                        },
                        attributes: ['username'],
                        raw: true,
                    });
                    cItem.username = userInfo.username;
                    cItem.createdAt = moment(cItem.createdAt).format('YYYY-MM-DD hh:mm:ss');
                }
            }
            item.comment = comment;
        }

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

        for (const item of result){
            const result_back = await backSell.findOne({
                where: {
                    order_id: item.id
                },
                raw: true
            });

            const result_comment = await Comment.findOne({
                where: {
                    goods_id: item.goods_id,
                    user_id: item.user_id
                },
                raw: true
            });

            if (result_comment){
                item.isComment = true;
            }
            if (result_back){
               if (result_back.type === '0'){
                   if (result_back.back_status === '0'){
                       item.isBacking = true;
                   } else if (result_back.back_status === '1'){
                       item.isBacked = true;
                   } else {
                       item.isBackReject = true;
                   }
               } else {
                   if (result_back.back_status === '0'){
                       item.isHandling = true;
                   } else if (result_back.back_status === '1') {
                       item.isHandled = true;
                   } else {
                       item.isHandleReject = true;
                   }
               }
            }
        }

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

    static async getCommentGoods () {
        const result = await Goods.findAll({
            where: {
                isComment: '1'
            },
            limit: 9,
            raw: true,
        });

        return result;
    }
    // 用户收货
    static async confirmOrder (ctx) {
        const { id } = ctx.request.body;

        await Order.update({
            order_status: '3'
        }, {
            where: {
                id
            }
        });
    }
   // 用户退/换货
    static async handleOrBackOrder(ctx){
        const { order_id, user_id, type } = ctx.request.body;

        await backSell.destroy({
                where: {
                    order_id: order_id,
                    user_id: user_id,
                },
        });

        await backSell.create({
            order_id,
            user_id,
            type: type.toString()
        });
        return true;
    }
    static async getBackOrders () {
        const result = await backSell.findAll({
            where: {
              back_status: '0'
            },
            raw: true,
        });

        for (const item of result){

            const order = await Order.findOne({
                where: {
                    id: item.order_id
                },
                raw: true
            });
            const user = await User.findOne({
                where: {
                    id: item.user_id
                },
                attributes: ['username'],
                raw: true
            });
            const goods = await Goods.findOne({
                where: {
                    id: order.goods_id,
                },
                attributes: ['goodsName'],
                raw: true,
            });
            item.username = user.username;
            item.order_num = order.order_num;
            item.goodsName = goods.goodsName;
        }

        return result;
    }
    // 管理员处理退/换货
    static async checkHandleOrder(ctx){
        const { id, type } = ctx.request.body;

        if (type === 1){
            const result = await backSell.findOne({
                where: {
                    id
                },
                raw: true
            });

            const result_order = await Order.findOne({
                where: {
                    id: result.order_id
                },
                raw: true,
            });

            const result_goods = await Goods.findOne({
                where: {
                    id: result_order.goods_id
                },
                raw: true
            });

            await Goods.update({
                goodsNum:  result_goods.goodsNum + result_order.order_num
            }, {
                where: {
                    id: result_order.goods_id
                }
            });
        }

        await backSell.update({
            back_status: type.toString()
        }, {
            where: {
                id
            }
        });
        return true;
    }

    // 商品评论
    static async commentGoods (ctx) {
        const {  goods_id, comment, score, user_id } = ctx.request.body;

        await Comment.create({
            goods_id,
            comment,
            score,
            user_id
        });

        return true;

    }
}

module.exports = GoodsService;
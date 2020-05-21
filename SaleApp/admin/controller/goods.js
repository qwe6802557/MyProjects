const GoodsService = require('../service/goods');

class GoodsController {

    static async getGoodsList (ctx) {
        try {
           const result = await GoodsService.getGoodsList(ctx);
            ctx.body = {
                code: 0,
                message: '查询商品成功!',
                messageBody: result,
            }
        } catch (e) {
            ctx.body = {
                code: 5,
                message: '查询商品失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async getCategory (ctx) {
        try {
            const result = await GoodsService.getCategory(ctx);
            ctx.body = {
                code: 0,
                message: '查询目录成功!',
                messageBody: result,
            }
        } catch (e) {
            ctx.body = {
                code: 5,
                message: '查询目录失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async addGoods (ctx) {
        try {
            await GoodsService.addGoods(ctx);
            ctx.body = {
                code: 0,
                message: '添加商品成功!',
                messageBody: null,
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '添加商品失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async updateGoods (ctx) {
        try {
            await GoodsService.updateGoods(ctx);
            ctx.body = {
                code: 0,
                message: '修改商品成功!',
                messageBody: null,
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '修改商品失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async deleteGoods (ctx) {
        try {
            await GoodsService.deleteGoods(ctx);
            ctx.body = {
                code: 0,
                message: '删除商品成功!',
                messageBody: null,
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '删除商品失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async getCategoryGoods (ctx) {
        try {
            const result = await GoodsService.getCategoryGoods(ctx);
            ctx.body = {
                code: 0,
                message: '查询商品成功!',
                messageBody: result,
            }
        } catch (e) {
            ctx.body = {
                code: 5,
                message: '查询商品失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async login (ctx) {
            const result =  await GoodsService.login(ctx);
            if (result.code === 0){
                ctx.body = {
                    code: 0,
                    message: '登录成功!',
                    messageBody: result.data,
                    token: result.token,
                }
            } else if (result.code === 2){
                ctx.body = {
                    code: 2,
                    message: '该用户不存在!',
                    messageBody: null
                }
            } else if (result.code === 1) {
                ctx.body = {
                    code: 1,
                    message: '用户名或密码错误!',
                    messageBody: null
                }
            } else {
                ctx.body = {
                    code: 5,
                    message: '登录失败!',
                    messageBody: null
                }
            }

    }

    static async register (ctx) {
        const result =  await GoodsService.register(ctx);
        if (result.code === 0){
            ctx.body = {
                code: 0,
                message: '注册成功!',
                messageBody: result.data,
                token: result.token,
            }
        }  else {
            ctx.body = {
                code: 5,
                message: '登录失败!',
                messageBody: null
            }
        }

    }

    static async updateUser (ctx) {
        try {
            const result = await GoodsService.updateUser(ctx);
            ctx.body = {
                code: 0,
                message: '更新用户信息成功!',
                messageBody: result.data,
                token: result.token,
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '更新用户信息失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async getAddress (ctx) {

        try {
            const result = await GoodsService.getAddress(ctx);

            ctx.body = {
                code: 0,
                message: '获取成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '获取失败!',
                messageBody: null
            };
            throw e;
        }

    }

    static async updateAddress (ctx) {

        try {
            await GoodsService.updateAddress(ctx);

            ctx.body = {
                code: 0,
                message: '修改地址成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '修改地址失败!',
                messageBody: null
            }
        }

    }

    static async getAllOrder (ctx) {
        try {
            const result = await GoodsService.getAllOrder(ctx);

            ctx.body = {
                code: 0,
                message: '查询成功!',
                messageBody: result,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '查询失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async handleOrder (ctx) {
        try {
            const result = await GoodsService.handleOrder(ctx);

            ctx.body = {
                code: 0,
                message: '下单成功!',
                messageBody: result,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '下单失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async deleteOrder (ctx) {
        try {
            const result = await GoodsService.deleteOrder(ctx);

            ctx.body = {
                code: 0,
                message: '删除成功!',
                messageBody: result,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '删除失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async payOrder (ctx) {
        try {
            await GoodsService.payOrder(ctx);

            ctx.body = {
                code: 0,
                message: '付款成功!',
                messageBody: null,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '付款失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async getGoodsByKeyword (ctx) {
        try {
            const result = await GoodsService.getGoodsByKeyword(ctx);

            ctx.body = {
                code: 0,
                message: '搜索成功!',
                messageBody: result,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '搜索失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async getCommentGoods (ctx) {
        try {
            const result = await GoodsService.getCommentGoods(ctx);

            ctx.body = {
                code: 0,
                message: '查询成功!',
                messageBody: result,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '查询失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async confirmOrder (ctx) {
        try {
            await GoodsService.confirmOrder(ctx);

            ctx.body = {
                code: 0,
                message: '收货成功!',
                messageBody: null,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '收货失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async handleOrBackOrder (ctx) {
        try {
            await GoodsService.handleOrBackOrder(ctx);

            ctx.body = {
                code: 0,
                message: '申请成功!',
                messageBody: null,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '申请失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async checkHandleOrder (ctx) {
        try {
            await GoodsService.checkHandleOrder(ctx);

            ctx.body = {
                code: 0,
                message: '处理成功!',
                messageBody: null,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '处理失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async getBackOrders (ctx) {
        try {
            const result = await GoodsService.getBackOrders();

            ctx.body = {
                code: 0,
                message: '查询成功!',
                messageBody: result,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '查询失败!',
                messageBody: null,
            };
            throw e;
        }
    }

    static async commentGoods (ctx) {
        try {
            await GoodsService.commentGoods(ctx);

            ctx.body = {
                code: 0,
                message: '评论成功!',
                messageBody: null,
            }
        }catch (e) {

            ctx.body = {
                code: 5,
                message: '评论失败!',
                messageBody: null,
            };
            throw e;
        }
    }
}

module.exports = GoodsController;
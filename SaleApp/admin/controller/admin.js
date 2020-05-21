const AdminService = require('../service/admin');

class AdminController {

    static async login (ctx) {
        const result =  await AdminService.login(ctx);
        if (result.code === 0){
            ctx.body = {
                code: 0,
                message: '登录成功!',
                messageBody: result.data,
                token: result.token,
            }
        } else if (result.code === 3){
            ctx.body = {
                code: 3,
                message: '验证码错误!',
                messageBody: null
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

    static async validateCode (ctx) {
        try {
            const result = await AdminService.validateCode(ctx);

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

    static async getGoodsList (ctx) {
        try {
            const result = await AdminService.getGoodsList(ctx);

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

    static async getAllUser (ctx) {
      try {
          const result = await AdminService.getAllUser();

          ctx.body = {
              code: 0,
              message: '查询成功!',
              messageBody: result
          };
      }catch (e) {
          ctx.body = {
              code: 5,
              message: '查询失败!',
              messageBody: null
          };
      }
    };

    static async getOrder (ctx) {
        try {
            const result = await AdminService.getOrder(ctx);

            ctx.body = {
                code: 0,
                message: '查询成功!',
                messageBody: result
            };
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '查询失败!',
                messageBody: null
            };
            throw e;
        }
    };

    static async addOrder (ctx) {
        try {
            await AdminService.addOrder(ctx);

            ctx.body = {
                code: 0,
                message: '添加成功!',
                messageBody: null
            };
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '添加失败!',
                messageBody: null
            };
            throw e;
        }
    };

    static async updateOrder (ctx) {
        try {
            await AdminService.updateOrder(ctx);

            ctx.body = {
                code: 0,
                message: '更新成功!',
                messageBody: null
            };
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '更新失败!',
                messageBody: null
            };
            throw e;
        }
    };

    static async deleteOrder (ctx) {
        try {
            await AdminService.deleteOrder(ctx);

            ctx.body = {
                code: 0,
                message: '删除成功!',
                messageBody: null
            };
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '删除失败!',
                messageBody: null
            };
            throw e;
        }
    };

    static async handleOrder (ctx) {
        try {
            await AdminService.handleOrder(ctx);

            ctx.body = {
                code: 0,
                message: '发货成功!',
                messageBody: null
            };
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '发货失败!',
                messageBody: null
            };
            throw e;
        }
    };

    static async handleOnOrOffSell (ctx) {
        try {
            await AdminService.handleOnOrOffSell(ctx);

            ctx.body = {
                code: 0,
                message: '操作成功!',
                messageBody: null
            };
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '操作失败!',
                messageBody: null
            };
            throw e;
        }
    }
}

module.exports = AdminController;
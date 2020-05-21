/**
 * 用户管理 controller
 */
const userService = require('../service/user');
class UserController {

    static async getCode (ctx) {
        const result = await userService.getCode(ctx);

        ctx.response.type = 'image/svg+xml';
        ctx.body = {
          code: 0,
          message: '获取验证码成功!',
          messageBody: result
        };
    }

    static async login (ctx) {
        const result = await userService.login(ctx);
        const { code, res, data, token } = result;
        if (code === 0) {
            ctx.body = {
                code,
                message: res + '欢迎您！' + data.username,
                messageBody: {
                    userInfo: data,
                    token
                }
            };
        } else {
            ctx.body = {
                code,
                message: res,
            };
        }
    }

    static async register (ctx) {
        const result = await userService.register(ctx);
        const { code, res, data, token } = result;
        if (code === 0) {
            ctx.body = {
                code,
                message: res,
                messageBody: {
                    userInfo: data,
                    token,
                }
            };
        } else {
            ctx.body = {
                code,
                message: res,
                messageBody: null,
            };
        }
    }

    static async updateUser (ctx) {

        try {
            const result = await userService.updateUser(ctx);

            ctx.body = {
                code: 0,
                message: '修改信息成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '修改信息失败!',
                messageBody: null
            }
        }
    }

    static async getUserInfo (ctx) {
        try {
            const result = await userService.getUserInfo(ctx);

            ctx.body = {
                code: 0,
                message: '获取信息成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '修改信息失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async getUserList (ctx){
        try {
            const result = await userService.getUserList(ctx);

            ctx.body = {
                code: 0,
                message: '获取用户列表成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '获取用户列表失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async deleteUser (ctx) {
        try {
            const result = await userService.deleteUser(ctx);

            ctx.body = {
                code: 0,
                message: '删除成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '删除失败!',
                messageBody: null
            };
            throw e;
        }
    }

}

module.exports = UserController;
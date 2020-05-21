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

}

module.exports = UserController;
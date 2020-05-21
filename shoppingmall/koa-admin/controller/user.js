/**
 * 用户管理 -- controller
 */

const userService = require('../service/user');
const request = require('koa2-request');
class UserController {
    // 发送QQ邮箱验证码
    static async sendMail (ctx) {
        try {
            const result = await userService.sendMail(ctx);

            if (result){
                ctx.body = {
                    code: 0,
                    message: '已成功发送邮件!',
                    messageBody: null
                }
            } else {
                ctx.body = {
                    code: 5,
                    message: '发送邮件失败!',
                    messageBody: null
                };
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '发送邮件失败!',
                messageBody: null
            };

            throw e;
        }
    }

    // 登录
    static async login (ctx) {
        try {
            const result = await userService.login(ctx);

            if (result === 0){
                ctx.body = {
                    code: 0,
                    message: '登录成功!',
                    messageBody: null
                }
            } else if (result === 1){
                ctx.body = {
                    code: 1,
                    message: '邮箱不正确!',
                    messageBody: null
                }
            } else {
                ctx.body = {
                    code: 2,
                    message: '验证码不正确!',
                    messageBody: null
                }
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '登录失败!',
                messageBody: null
            };

            throw e;
        }
    }

    // 注册
    static async register (ctx) {
        try {
            const result = await userService.register(ctx);

            if (result !== 1 && result !== 2){
                ctx.body = {
                    code: 0,
                    message: '注册成功!',
                    messageBody: result
                }
            } else if (result === 1){
                ctx.body = {
                    code: 1,
                    message: '验证码不正确!',
                    messageBody: null
                }
            } else {
                ctx.body = {
                    code: 2,
                    message: '该邮箱已注册!',
                    messageBody: null
                }
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '注册失败!',
                messageBody: null
            };

            throw e;
        }
    }

    // 定位
    static async getPosition (ctx) {
        const ak = 'oLnEuMEFVvUoG8ZLXq6Wzb4WozygICav';

        try {
            const result = await request({
                url: `http://api.map.baidu.com/location/ip?ak=${ak}`,
                method: 'get'
            });

            ctx.body = {
                code : 0,
                message: '定位成功!',
                messageBody: JSON.parse(result.body).content.address
            };
        }catch (e) {
            ctx.body = {
                code : 5,
                message: '定位失败!',
                messageBody: null
            };
        }
    }

    // 地理位置逆解析
    static async getPoint (ctx){
        const ak = 'oLnEuMEFVvUoG8ZLXq6Wzb4WozygICav';
        const { address } = ctx.request.body;

        try {
            const result = await request({
                url: `http://api.map.baidu.com/geocoding/v3/?address=${address}&output=json&ak=${ak}`,
                method: 'get'
            });

            console.log(JSON.parse(result.body));

            ctx.body = {
                code : 0,
                message: '定位成功!',
                messageBody: JSON.parse(result.body).content.address
            };
        }catch (e) {
            ctx.body = {
                code : 5,
                message: '定位失败!',
                messageBody: null
            };
            throw e;
        }
    }
}

module.exports = UserController;
/**
 * 用户管理 service
 */
const { user, code } = require('../database/index').models;
const { encryptPw, decryptPw, randomNum } = require('../utils/pw'); // 密码加密
const { jwtBorn } = require('../utils/jwt');
const nodeMailer = require('nodemailer');

class UserService {
    // 发送QQ邮箱验证码
    static async sendMail (ctx) {
        const { email } = ctx.request.body;
        const random = randomNum();
        let flag = true;
        let transporter = nodeMailer.createTransport({
            service: 'qq',
            port: 465, // SMTP 端口
            secureConnection: true, // 使用了 SSL
            auth: {
                user: '425160813@qq.com',
                // 这里密码不是qq密码，是你设置的smtp授权码
                // 获取qq授权码请看:https://jingyan.baidu.com/article/6079ad0eb14aaa28fe86db5a.html
                pass: 'lgilpzjqcbmtbiic',
            }
        });

        let mailOpt = {
            from: '"美团" <425160813@qq.com>',  // 你到qq邮箱地址
            to: email, // 接受人,可以群发填写多个逗号分隔
            subject: '登录验证码', // 主题名(邮件名)
            // 可以发送text或者html格式,2选1
            // text: 'Hello world?', // 纯文本
            html: `<b>您的验证码是${random}</b>` // html
        };

        await transporter.sendMail(mailOpt, async (error, info) => {
            if (error) {
                flag = false;
                return false;
            }

            const result = await code.findOne({
                raw: true
            });

            !!result && await code.update({
                email: email,
                code: random
            }, {
                where: {
                    id: result.id
                },
                raw: true
            });

            !result && await code.create({
                email: email,
                code: random
            });
            console.log('邮件已发送成功,验证码: ' + random, info.messageId);
        });

        return flag;
    }
   // 登录
    static async login (ctx) {
       const { email, password } = ctx.request.body;
       const result = await code.findOne({
           raw: true
       });

       const user = await user.findOne({
           where: {
               email,
           },
           raw: true,
       });

       if (email !== result.email){
           return 1;
       }

       if (Number(password) !== result.code){
           return 2;
       }

       return user;
    }
    // 注册
    static async register (ctx) {
        const { username, password, email,} = ctx.request.body;
        const result = await code.findOne({
            raw: true
        });

        if (Number(ctx.request.body.code) !== result.code){
            return 1;
        }

        const result_email = await user.findOne({
            where: {
                email,
            },
            raw: true,
        });

        if (result_email){
            return 2;
        }

        const userData = await user.create({
            username,
            password,
            email,
        }, {
            raw: true
        });

        return userData.dataValues;
    }
}

module.exports = UserService;
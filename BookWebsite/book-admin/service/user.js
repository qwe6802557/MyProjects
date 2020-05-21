/**
 * 用户管理 service
 */
const svgCaptcha = require('svg-captcha');  // 引入生成验证码插件
const { user, book, Words } = require('../database/index').models;
const { encryptPw, decryptPw } = require('../untils/pw'); // 密码加密
const { jwtBorn } = require('../untils/jwt');
const Sequelize = require('sequelize');
const { defineProperty } = require('../untils/method');

class UserService {
    // 获取验证码
    static async getCode (ctx) {
        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 40,
            background: '#cc9966',
        });

        ctx.session.code = captcha.text;
        console.log(ctx.session.code);
        return captcha.data;
    }
   // 登录
    static async login (ctx) {
        try {
            const { username, password } = ctx.request.body;
            const result = await user.findOne({
                where: {
                    username,
                },
                raw: true,
            }); // 模糊查询：`SELECT * FROM USERS WHERE CONCAT(USERNAME,MOBILE) LIKE '%${username}%'`
            if (result) {
                const isMatch = await decryptPw(password, result.password);
                if (isMatch) {
                    /*if (code.toLowerCase() === ctx.session.code.toLowerCase()) {*/
                        const token = jwtBorn(result);
                        ctx.session.payload = result;

                        return {
                            code: 0,
                            res: '登录成功！',
                            data: result,
                            token,
                        };
                    /*}*/
                    return {
                        code: 2,
                        res: '验证码输入错误！',
                    };
                }
                return {
                    code: 1,
                    res: '账号或者密码错误！',
                };

            }
            return {
                code: 3,
                res: '用户不存在！',
            };

        } catch (e) {
            console.log(e);
            return {
                code: 5,
                res: '登录失败!',
            };
        }
    }
    // 注册
    static async register (ctx) {
        const { username, password, email, sex, avatar, age, address } = ctx.request.body;

        const FACTORY_STRENTTH = 10; // 设置加盐加密强度
        const result = await user.findOne({
            where: {
                username,
            },
            raw: true,
        });

        if (!result) {
            const result_hash = await encryptPw(FACTORY_STRENTTH, password);
            return await user.create({
                username,
                password: result_hash,
                email,
                sex: sex.toString(),
                avatar,
                address,
                age }).then( res => {
                if (res) {
                    const token = jwtBorn(res.dataValues);
                    ctx.session.payload = res.dataValues;
                    return {
                        code: 0,
                        res: '注册成功！将自动跳转到主页！',
                        data: res.dataValues,
                        token,
                    };
                }
                return {
                    code: 2,
                    res: '注册失败！',
                };
            }).catch(err => {
                console.log(err);
                return {
                    code: 5,
                    res: '注册失败',
                };
            });
        }
        return {
            code: 1,
            res: '用户名已存在!',
        };
    }
    // 更新个人信息
    static async updateUser (ctx) {
        const { username, password, email, sex, avatar, age, address, id } = ctx.request.body;
        const FACTORY_STRENTTH = 10;
        let result_hash = '';
        const addInfo = {
            username,
            email,
            sex: sex.toString(),
            avatar,
            address,
            age
        };

        if (password){
            result_hash = await encryptPw(FACTORY_STRENTTH, password);

            addInfo.password = result_hash;
        }
         await user.update(addInfo, {
            where: {
                id
            }
        });

         const result = await user.findOne({
             where: {
                 id
             },
             raw: true
         });

        return result;
    }
    // 获取个人信息
    static async getUserInfo (ctx) {
        const { id } = ctx.request.body;

        const result = await user.findOne({
            where: {
                id
            },
            raw: true,
        });

        const result_books = await book.findAll({
            where: {
                userId: id,
            },
            raw: true,
        });

        result.books = result_books;

        return result;
    }
    // 获取用户列表
    static async getUserList (ctx) {
        const { curPage, pageSize, username } = ctx.request.body;
        const searchCondition = {
            identity: '0'
        };

        const current = curPage ? parseInt(curPage) : 1;
        const size = pageSize ? parseInt(pageSize) : 10;
        const offset = (current - 1) * size;
        const limit = size;

        !!username && defineProperty(searchCondition, 'username', {
            [Sequelize.Op.like]: `%${username}%`
        });

        const result = await user.findAll({
            where: searchCondition,
            raw: true,
            offset,
            limit,
        });

        return result;
    }
    // 删除用户
    static async deleteUser (ctx) {
        const { id } = ctx.request.body;

            await book.destroy({
                where: {
                    userId: id,
                }
            });

            await Words.destroy({
                where: {
                    userId: id,
                }
            });

           await user.destroy({
               where: {
                   id
               }
           });
    }

}

module.exports = UserService;
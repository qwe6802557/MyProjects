/**
 * 用户管理控制器
 */
const UserService = require('../service/user.js');
const { jwtBorn } = require('../untils/jwt');
class UserController {
    //请求验证码
    static async getVerifyCode(req, res) {
        try {
            const svgCaptcha = await UserService.getVerifyCode();
            req.session.verifyCode = svgCaptcha.text; //从生成的svgCaptcha对象中取出验证码字符
            res.type = 'image/svg+xml';
            res.send({
                code: 0,
                message: '获取验证码成功!',
                messageBody: svgCaptcha.data
            });
        } catch (e) {
            res.send({
                code: 5,
                message: '获取验证码失败!',
                messageBody: null
            });
            throw e;
        }
    }
    //登录
    static async login(req , res){
        try{
            const result = await UserService.login( req );
            if (result.code === 0){
                const token = jwtBorn(result.userInfo);
                req.session.payload = result.userInfo;
                res.send( {
                    code: 0,
                    message: '登录成功！',
                    messageBody: {
                        token,
                        userInfo: result.userInfo,
                    }
                })
            }
            result === 1 && res.send({ code: 1, message: '账号或密码不正确!', messageBody: null});
            result === 2 && res.send({ code: 2, message: '验证码不正确!', messageBody: null});
            result === 3 && res.send({ code: 3, message: '该用户不存在!', messageBody: null});
            result === 5 && res.send({ code: 5, message: '服务器出错!', messageBody: null});
        }catch (e) {
            res.send({ code: 5, message: '服务器出错!', messageBody: null});
            throw e;
        }
    }
    //注册
    static async register(req , res){
        try{
            const result = await UserService.register( req );
            if (Array.isArray(result)){
                    const token = jwtBorn(result[1]);
                    res.send( {
                        code: 0,
                        message: '注册成功！将自动跳转到首页',
                        messageBody: {
                            token,
                            userInfo: result.userInfo,
                        }
                    })
            }
            result === 1 && res.send({ code: 1, message: '该用户已存在!', messageBody: null});
            result === 2 && res.send({ code: 2, message: '该手机号已被注册!', messageBody: null});
            result === 3 && res.send({ code: 2, message: '该邮箱已被注册!', messageBody: null});
            result === 5 && res.send({ code: 5, message: '注册失败!', messageBody: null});
        }catch (e) {
            res.send({ code: 5, message: '注册失败!', messageBody: null});
            throw e;
        }
    }
}

module.exports = UserController;
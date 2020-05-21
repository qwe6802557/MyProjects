/**
 * 用户管理服务
 */
const svgCaptcha = require('svg-captcha');
const mongoose = require('mongoose');
class UserServive {
    //生成验证码
    static async getVerifyCode () {
        const captcha = svgCaptcha.create({
            size:4,
            fontSize:50,
            width:110,
            height:38,
            background:'#cc9966'
        });
        return captcha;
    }
    //登录
    static async login (req) {
        const { userName, verifyCode } = req.body;
        const _passWord = req.body.passWord;
        if (verifyCode.toLowerCase() !== req.session.verifyCode.toLowerCase()){
            return 2;
        }
        const User = mongoose.model('User');
        const result = await User.findOne({
            $or: [{
                userName
            }, {
                mobile: userName
            }, {
                eMail: userName
            }]
        }); // 用户名和手机号都可以查询到数据 一对一
        if (!result) {
            return 3;
        }
        const { passWord } = result;
        const newUser = new User();
        return await newUser.comparePassword( _passWord, passWord ).then( res => {
            if (res){
                req.session.payload = result;
                return {
                    code: 0,
                    userInfo: result
            };
            } else {
                return 1;
            }
        }).catch( err => {
            return 5;
        })
    }
    //注册
    static async register (req) {
        const { userName, mobile, eMail } = req.body;
        const User = mongoose.model('User');
        const result_userName = await User.findOne({
            userName,
        });
        if (result_userName){
            return 1;
        }
        const result_phone = await User.findOne({
            mobile,
        });
        if (result_phone){
            return 2;
        }
        const result_eMail = await User.findOne({
            eMail,
        });
        if (result_eMail){
            return 3;
        }
        return await new User(req.body).save().then( res => {
            req.session.payload = res;
            return [0, res];
        }).catch( err => {
            throw err;
            return 5;
        })
    }
}
module.exports = UserServive;
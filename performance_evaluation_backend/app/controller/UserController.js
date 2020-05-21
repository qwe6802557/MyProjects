let userServer = require('../service/UserService');
let authServer = require('../service/AuthService');
let redis = require('./../../utils/redis');
module.exports = {
    //添加用户信息接口
    add: function(req,res,next) {
        let reqParam = req.body;
        userServer.checkUserParamsPromise(reqParam).then(result => {
            return userServer.createUser(reqParam);
        }).then (result => {
            res.send(result);
        }).catch (err => {
            res.send(err);
        })
    },
    //登录接口
    login: function(req,res,next) {
        let reqParam = req.body;
        userServer.login(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //退出登录接口
    logout: function (req,res,next) {
        authServer.auth(req,'*').then(result => {
            redis.del(req.header('token'));
            res.send({ code: 200, message:'退出登录成功！'});
        }).catch(err => {
            res.send(err);
        })
    },
    //获取用户个人信息接口
    getInfo: function(req,res,next) {
        authServer.auth(req, '*').then(result => {
            console.log('result---->',result)
            userServer.getInfo(result._id).then(result => {
                res.send(result);
            }).catch(err => {
                res.send(err);
            }).catch(err => {
                res.send(err);
            })
        }).catch(err => {
            res.send(err);
        })
    },
    //获取用户信息接口
    getAll:function(req,res,next) {
        authServer.auth(req,'*').then(() => {
            let reqParam = req.body;
            userServer.getAllUser(reqParam).then(result => {
                res.send(result)
            }).catch(err => {
                res.send(err)
            }).catch(err => {
                res.send(err)
            })
        }).catch(err => {
            res.send(err);
        })
        
    },
    //修改用户信息接口
    update:function(req,res,next) {
        authServer.auth(req, '*').then((result) => {
            let reqParam = req.body;
            userServer.updateUser(reqParam,result._id).then(result => {
                res.send(result);
            }).catch(err => {
                res.send(err);
            })
        }).catch(err => {
            res.send(err);
        })
        
    },
    //删除用户信息接口
    delete:function(req,res,next) {
        authServer.auth(req,'*').then(result => {
            let reqParam = req.body;
            userServer.deleteUser(reqParam).then(result => {
                res.send(result);
            }).catch(err => {
                res.send(err);
            })
        }).catch(err => {
            res.send(err);
        })
        
    }
}
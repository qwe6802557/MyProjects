let jwt = require('jsonwebtoken');
let tokenKey = 'performance_evaluation';
let redis = require('./../../utils/redis');
module.exports = {
    auth: function (req,method) {
        console.log('token---->',req.header('token'))
        return new Promise((resolve, reject) => {
            if (req.header('token') === null || req.header('token') === undefined) {
                reject({code: 401,message: '权限验证失败，请重新登录！'})
            }
            let token = req.header('token');
            redis.hgetall(token, function(err, reply) {
                console.log('reply----> :', reply);
                if (err) {
                    reject({ code: 500, message: '权限验证失败' + err.message});
                } else {
                    if (reply._id === undefined || reply ===  undefined || !reply) {
                        reject({ code: 405, message: '权限验证失败，查无此Token'})
                    } else {
                        reply.refreshTime = parseInt(reply.refreshTime);
                        redis.hmset(token,reply);
                        redis.expire(token,60 * 150000000000);
                        jwt.verify(token, tokenKey, function(err, decoded) {
                            if (err) {
                                reject({ code: 500, message: '权限验证失败' + err.message});
                            } else {
                                if (decoded._id.toString() !== reply._id.toString()) {
                                    reject({ code: 406, message: '权限验证失败，token不匹配'})
                                }
                                if (req.path === '/logout') {
                                    resolve({ code: 200, message: 'sucess'})
                                } else {
                                    req.user = decoded;
                                    resolve({ code: 200, message: 'sucess',_id: decoded._id});
                                }
                            }
                        })
                    }
                }
            })
        })
    }
}
let User = require('../model/UserModel');
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let tokenKey = 'performance_evaluation';
let redis = require('./../../utils/redis');
module.exports = {
    //用户信息提交时的信息校验方法
    checkUserParamsPromise: function (reqParam) {
        return new Promise ((resolve,reject) => {
            if (!reqParam.name) {
                reject({ code: 201, message: '姓名是必填选项！！'});
            }
            if(!reqParam.jobID) {
                reject({code: 201,message: '工号是必填选项！！！'})
            }
            if(!reqParam.salaryID) {
                reject({code: 201,message: '薪资号是必填选项！！！'})
            }
            resolve({code: 200,message:'添加成功'})
        })
    },
    //提交用户信息方法
    createUser: function (reqParam) {
        return new Promise ((resolve,reject) => {
            let data = {};
            reqParam.name && (data.name = reqParam.name);
            reqParam.jobID && (data.jobID = reqParam.jobID);
            if (reqParam.department!= undefined) data.department = reqParam.department;
            if (reqParam.degree != undefined) data.degree = reqParam.degree;
            if (reqParam.profession != undefined) data.profession = reqParam.profession;
            reqParam.salaryID && (data.salaryID = reqParam.salaryID);
            if (reqParam.phone != undefined) data.phone = reqParam.phone;
            if (reqParam.email != undefined) data.email = reqParam.email;
            reqParam.role && (data.role = reqParam.role);
            if (reqParam.level != undefined) data.level = reqParam.level;
            if (reqParam.station != undefined) data.station = reqParam.station;
            reqParam.password && (data.password = reqParam.password);
            let param = {
                jobID: reqParam.jobID
            }
            let userData = new User(data);
            User.findOne(param, (err, data) => {
                err && reject({ code: 500, message: '添加失败' + err.message});
                if (!data) {
                    userData.save(function (err,data) {
                        if (err) {
                            reject({code: 500,message: '创建用户失败'})
                        } else {
                            resolve({code: 200,message: '创建成功',result: data});                         
                        }
                    })
                } else {
                    reject ({code: 201, message:'该用户重复，请检查该用户是否存在！！'})
                }
            })
           
            
        })
    },
    //登录方法
    login: function (reqParam) {
        return new Promise((resolve, reject) => {
            if (!reqParam.jobID) {
                reject({ code: 204, message: '登录失败，请输入工号！'})
            }
            if (!reqParam.password) {
                reject({ code: 204, message: '登录失败，请输入密码！'})
            }
            let param = {
                jobID: reqParam.jobID
            }
            User.findOne(param, (err, data) => {
                console.log('param---->',param)
                console.log('data--->',data,'----',err);
                if (err) {
                    reject({ code: 500, message: '登录失败'});
                }
                if (!data) {
                    reject({ code: 205, message: '登录失败，查无该用户！如需登录请联系管理员！'})
                }
                if (data && reqParam.password !== data.password) {
                    reject({ code: 206, message: '登录失败，账号或密码有误！'})
                }
                if (data && reqParam.password == data.password) {
                    const payload = { _id: data._id, jobID: data.jobID};
                    const token = jwt.sign(payload,tokenKey);
                    redis.hmset(token, { _id: data._id.toString(), createTime: new Date() });
                    redis.expire(token, 1000000000000000000000);
                    resolve({ code: 200, message: '登录成功',token: token, result: data});
                }
                
            })
        })
    },
    //用户登录获取个人信息接口
    getInfo: id => new Promise((resolve, reject) => {
        console.log('id----->',id)
        if (!id) {
            reject({ code: 204, message: '请先登录'});
        } else {
            User.findById(mongoose.Types.ObjectId(id), (err, data) => {
                if (err) {
                    reject({ code: 500, message: '获取信息失败' + err.message});
                } else {
                    resolve({ code: 200, message: '获取信息成功', result: data})
                }
            })
        }
    }),
    //获取所有用户信息方法
    getAllUser: function (reqParam) {
        return new Promise((resolve,reject) => {
            let data = {},skip,limit;
            if (reqParam.skip) {
                skip = reqParam.skip;
            } else {
                skip = 0;
            }
            if (reqParam.limit) {
                limit = reqParam.limit;
            } else {
                limit = 10;
            }
            if (reqParam.name) data.name = reqParam.name;
            if (reqParam._id) data._id = reqParam._id;
            User.countDocuments(data, function (err, count) {
                if (err) {
                    reject({code: 500, message: '获取数据失败' + err.message})
                } else {
                    User.find(data, null, {skip: parseInt(skip), limit: parseInt(limit)}, function(err,docs) {
                        if (err) {
                            reject({code: 201, message: '获取数据失败' + err.message});
                        } else {
                            resolve({code: 200,count: count, message: '获取数据成功！', result:docs})
                        }
                    })
                }
            })
        })
    },
    //修改用户信息方法
    updateUser: function (reqParam) {
        return new Promise((resolve,reject) => {
            let data = {},
                updateData = {};
                if (!reqParam._id) {
                    reject({code: 201,message:'提交失败，无用户id！'})
                } else {
                    data._id = mongoose.Types.ObjectId(reqParam._id);
                }
            reqParam.name && (updateData.name = reqParam.name);
            reqParam.jobID && (updateData.jobID = reqParam.jobID);
            if (reqParam.department!= undefined) updateData.department = reqParam.department;
            if (reqParam.degree != undefined) updateData.degree = reqParam.degree;
            if (reqParam.profession != undefined) updateData.profession = reqParam.profession;
            reqParam.salaryID && (updateData.salaryID = reqParam.salaryID);
            if (reqParam.phone != undefined) updateData.phone = reqParam.phone;
            if (reqParam.email != undefined) updateData.email = reqParam.email;
            reqParam.role && (updateData.role = reqParam.role);
            if (reqParam.level != undefined) updateData.level = reqParam.level;
            if (reqParam.station != undefined) updateData.station = reqParam.station;
            reqParam.password && (updateData.password = reqParam.password)
            User.findByIdAndUpdate(data._id, updateData, {new: false},function (err, data) {
                if (err) {
                    reject({ code: 500, message: '提交失败' + err.message});
                } else {
                    resolve({ code: 200, message: '提交成功！'})
                }
            })
        })
    },
    //删除用户信息方法
    deleteUser: function (reqParam) {
        return new Promise((resolve,reject) => {
            let data = {};
            if (!reqParam._id) {
                reject({ code: 201,message: '删除失败-该条数据无id'});
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
            }
            User.findByIdAndRemove(data, function (err,data) {
                if (err) {
                    reject({ code: 500, message: '删除失败-' + err.message});
                } else {
                    resolve({ code: 200,message: '删除成功！'})
                }
            })
        })
    }
}
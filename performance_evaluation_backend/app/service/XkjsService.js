let TeachWorkload = require('../model/XkjsMoudel');
let mongoose = require('mongoose');
module.exports = {
    //添加学科建设
    createXkjs: function (reqParam) {
        return new Promise ((resolve,reject) => {
            let data = {};
            reqParam.name && (data.name = reqParam.name);
            reqParam.jobID && (data.jobID = reqParam.jobID);
            reqParam.station && (data.station = reqParam.station);
            reqParam.finalAuditRecord && (data.finalAuditRecord = reqParam.finalAuditRecord);
            reqParam.finalStatus && (data.finalStatus = reqParam.finalStatus);
            reqParam.submitTime && (data.submitTime = reqParam.submitTime);
            reqParam.xyrMoudle && (data.xyrMoudle = reqParam.xyrMoudle);
            let XkjsData = new Xkjs(data);
            XkjsData.save(function (err,data) {
                if (err) {
                    reject({ code: 500, message: '创建失败！'});
                } else {
                    resolve({ code:200, message:'创建成功！', result: data})
                }
            })
        })
    },
    //用户获取自己的学科建设模块清单
    getOwnXkjs: (reqParam) => {
        return new Promise((resolve,reject) => {
            let data = {},skip,limit;
            if (reqParam.skip) skip = reqParam.skip;
            else skip = 0;
            if (reqParam.limit) limit = reqParam.limit;
            else limit = 10;
            console.log('server里面的reqParam :>> ', reqParam);
            Xkjs.countDocuments(reqParam, function(err, count) {
                if (err) {
                    reject({ code: 500, message:'获取数据失败！请稍后重试！'});
                } else {
                    if (reqParam.jobID) data.jobID = reqParam.jobID;
                    Xkjs.find(data,null,{skip:parseInt(skip), limit: parseInt(limit)}, function (err,docs) {
                        if (err) {
                            reject({ code: 201, message: '获取数据失败，'+ err.message});
                        } else {
                            resolve({ code: 200, count: count, message: '获取成功！',result: docs});
                        }
                    })
                }
            })
        })
    },
    //修改某一条工作量模块清单
    updateXkjs: (reqParam) => {
        return new Promise((resolve, reject) => {
            let data = {},updateData = {};
            if (!reqParam._id) {
                reject({code: 201, message:'修改失败，请刷新重试！'})
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
            }
            reqParam.name && (updateData.name = reqParam.name);
            reqParam.jobID && (updateData.jobID = reqParam.jobID);
            reqParam.station && (updateData.station = reqParam.station);
            reqParam.finalAuditRecord && (updateData.finalAuditRecord = reqParam.finalAuditRecord);
            reqParam.finalStatus && (updateData.finalStatus = reqParam.finalStatus);
            reqParam.submitTime && (updateData.submitTime = reqParam.submitTime);
            reqParam.xyrMoudle && (updateData.xyrMoudle = reqParam.xyrMoudle);
            Xkjs.findByIdAndUpdate(data._id,updateData,{new: false}, function(err, data) {
                if (err) {
                    reject({ code: 500, message:'创建失败，' + err.message})
                } else {
                    resolve({ code: 200, message:'修改成功！'})
                }
            })
        })
    },
    //删除某一条工作量模块清单
    deleteXkjs: (reqParam) => {
        return new Promise((resolve,reject) => {
            let data = {};
            if (!reqParam._id) {
                reject({ code: 201, message:'删除失败，请刷新重试！'});
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
                TeachWorkload.findByIdAndRemove(data, function(err, data) {
                    if (err) {
                        reject({ code: 500, message:'删除失败！' + err.message});
                    } else {
                        resolve({ code: 200,message: '删除成功！'})
                    }
                })
            }
        })
    },
    //获取所有的工作量数据清单
    getXkjs: (reqParam) => {
        return new Promise((resolve, reject) => {
            let data = {}, skip, limit;
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
            if (reqParam._id) data._id = reqParam._id;
            if (reqParam.jobID) data.jobID = reqParam.jobID;
           Xkjs.countDocuments(data, function (err,count) {
                if (err) {
                    reject({ code: 500, message: '获取数据失败，' + err.message});
                } else {
                    Xkjs.find(data, null, {skip: parseInt(skip), limit: parseInt(limit)}, function(err, docs) {
                        if(err) {
                            reject({ code: 201, message: '数据获取失败，'+ err.message});
                        } else {
                            resolve({ code: 200, count: count, message: '获取数据成功！', result:docs})
                        }
                    })
                }
            })
        })
    },
    //根据_id获取某一条单子的基本form
    getBaseFormData: (reqParam) => {
        return new Promise((resolve, reject) => {
            let data = {};
            TeachWorkload.countDocuments(reqParam, function (err) {
                if (err) {
                    reject({ code: 500, message:'获取数据失败！' + err.message});
                } else {
                    if (reqParam._id) data._id = reqParam._id;
                    TeachWorkload.find(data, null, function(err, docs) {
                        if (err) {
                            reject({ code: 201, message:'获取数据失败！' + err.message});
                        } else {
                            resolve({ code: 200, message:'获取数据成功！',result:docs});
                        }
                    })
                }
            })
        })
    }
}
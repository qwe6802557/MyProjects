let Level = require('../model/LevelMoudel');
let mongoose = require('mongoose');
module.exports = {
    //提交时的信息校验方法
    checkLevelParamsPromise: function (reqParam) {
        return new Promise ((resolve,reject) => {
            if (!reqParam.name) {
                reject({ code: 201, message: '级别是必填选项！！'});
            }
            if (!reqParam.distribScienceFund) {
                reject({ code: 201, message:'学院分配的科研经费任务是必填选项！'})
            }
            resolve({code: 200,message:'添加成功'})
        })
    },
    //添加级别方法
    createLevel: function (reqParam) {
        return new Promise ((resolve,reject) => {
            let data = {};
            reqParam.name && (data.name = reqParam.name);
            reqParam.distribScienceFund && (data.distribScienceFund = reqParam.distribScienceFund);
            reqParam.teaching && (data.teaching = reqParam.teaching);
            reqParam.science && (data.science = reqParam.science);
            reqParam.teachAndScience && (data.teachAndScience = reqParam.teachAndScience);
            let levelData = new Level(data);
            levelData.save(function (err,data) {
                if (err) {
                    reject({code: 500,message: '添加失败'})
                } else {
                    resolve({code: 200,message: '添加成功',result: data});
                }
            })
        })
    },
    //获取所有级别
    getLevel: function (reqParam) {
        return new Promise((resolve, reject) => {
            let data = {};
            if (reqParam.name) data.name = reqParam.name;
            if (reqParam.distribScienceFund) data.distribScienceFund = reqParam.distribScienceFund;
            if (reqParam.teaching) data.teaching = reqParam.teaching;
            if (reqParam.science) data.science = reqParam.science;
            if (reqParam.teachAndScience) data.teachAndScience = reqParam.teachAndScience;
            Level.countDocuments(data, function (err, count) {
                if (err) {
                    reject({code: 500, message: '获取数据失败' + err.message});
                } else {
                    Level.find(data, null, function (err, docs) {
                        if (err) {
                            reject({code: 201, message: '级别获取失败' + err.message})
                        } else {
                            resolve({code: 200, count: count,message: '获取成功', result: docs})
                        }
                    })
                }
            })
        })
    },
   //修改级别
   updateLevel: function (reqParam) {
       return new Promise((resolve,reject) => {
           let data = {},
               updateData = {};
            if (!reqParam._id) {
                reject({ code: 201, message:'修改失败'});
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
            }
            reqParam.name && (updateData.name = reqParam.name);
            reqParam.distribScienceFund && (updateData.distribScienceFund = reqParam.distribScienceFund);
            reqParam.teaching && (updateData.teaching = reqParam.teaching);
            reqParam.science && (updateData.science = reqParam.science);
            reqParam.teachAndScience && (updateData.teachAndScience = reqParam.teachAndScience);
            Level.findByIdAndUpdate(data._id, updateData, function(err) {
                if (err) {
                    reject({code: 500,message:'修改失败'})
                } else {
                    resolve({code: 200,message: '修改成功'})
                }
            })
       })
   },
   //删除级别
   deleteLevel: function (reqParam) {
       return new Promise((resolve,reject) => {
           let data = {};
           if (!reqParam._id) {
               reject({code: 201,message:'删除失败，不存在id！'})
           } else {
               data._id = mongoose.Types.ObjectId(reqParam._id);
           }
           Level.findOneAndRemove(data,function (err,data) {
               if (err) {
                   reject({code: 500, message:'删除失败-' + err.message});
               } else {
                   resolve({code: 200, message: '删除成功！'})
               }
           })
       })
   }
}
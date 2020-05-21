let teachWorkloadServer = require('../service/TeachWorkloadService');
module.exports = {
    //添加工作量模块数据
    add: function(req,res,next) {
        let reqParam = req.body;
        teachWorkloadServer.createTeachWorkload(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //用户获取自己的工作量模块清单
    getOwnTeachWorkload: function(req,res,next) {
        let reqParam = req.query;
        console.log('reqParam :>> ', reqParam);
        teachWorkloadServer.getOwnTeachWorkload(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //修改某条工作量模块清单
    update: function(req,res,next) {
        let reqParam = req.body;
        teachWorkloadServer.updateTeachWorkload(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //删除某条工作量模块清单
    delete: function(req,res,next) {
        let reqParam = req.body;
        teachWorkloadServer.deleteTeachWorkload(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //获取所有工作量模块清单
    getAll: function(req,res,next) {
        let reqParam = req.query;
        teachWorkloadServer.getAllTeachWorkload(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    },
    //获取某一条数据的form
    getBase: function(req,res,next) {
        let reqParam = req.query;
        teachWorkloadServer.getBaseFormData(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
}
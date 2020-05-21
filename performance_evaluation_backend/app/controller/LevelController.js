let levelServer = require('../service/LevelService');
module.exports = {
    //添加级别
    add: function(req,res,next) {
        let reqParam = req.body;
        levelServer.checkLevelParamsPromise(reqParam).then(result => {
            return levelServer.createLevel(reqParam);
        }).then (result => {
            res.send(result);
        }).catch (err => {
            res.send(err);
        })
    },
    //获取所有级别
    getAll:function (req,res,next) {
        let reqParam = req.body;
        levelServer.getLevel(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //修改级别
    update:function (req,res,next) {
        let reqParam = req.body;
        levelServer.updateLevel(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //删除级别
    delete:function (req,res,next) {
        let reqParam = req.body;
        levelServer.deleteLevel(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    }
}
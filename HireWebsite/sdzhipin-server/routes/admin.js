var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
//通用获取列表
router.get('/getAuthorityList', function(req, res) {
    const { type } = req.query;
    let result = [];
    const user = mongoose.model('user');

    if (type === '0'){
        user.find({
            type: "dashen"
        }).then( data => {
            result = data;
            res.send({ code: 0, message: '查询成功!', messageBody: result})
        })
    } else {
        user.find({
            type: "laoban"
        }).then( data => {
            result = data;
            res.send({ code: 0, message: '查询成功!', messageBody: result})
        })
    }
});
//删除老板或大神通用路由
router.post('/deleteSingle', ( req, res ) => {
    const { _id } = req.body;
    const user = mongoose.model('user');
    user.remove({
        _id
    }).then( data => {
        res.send({
            code: 0,
            message: '删除成功!',
            messageBody: null,
        });
    }).catch( err => {
        res.send({
            code: 5,
            message: '删除失败!',
            messageBody: null,
        });
        throw err;
    })
});
//查询通用路由
router.get('/searchInfo', (req, res) => {
    const { username, post, type} = req.query;
    const searchInfo = {};
    const user = mongoose.model('user');
    if (username){
        searchInfo.username = {
            $regex: username
        };
    }
    if (post){
        searchInfo.post = post;
    }
    if (type){
        searchInfo.type = type;
    }
    user.find(searchInfo).then( data => {
        !!res && res.send({ code: 0, message: '查询成功!', messageBody: data });
        !res && res.send({ code: 1, message: '暂无所查询的数据!', messageBody: null });
    }).catch( err => {
        res.send({ code: 5, message: '查询失败!', messageBody: null });
    })
});

//添加老板或大神通用路由
router.post('/addInfo', ( req, res ) => {
    const { username, type } = req.body;
    const user = mongoose.model('user');
    user.findOne({
        username,
        type
    }).then( data => {
        if (data){
            res.send({ code:1, message:'该用户已存在!', messageBody: null });
        } else {
            user.create(req.body).then( data => {
                res.send( { code: 0, message: '添加成功!', messageBody: null });
            })
        }
    }).catch( err => {
        res.send({ code: 5, message: '添加失败!'});
    })
});
//获取编辑信息
router.get('/getEdit', (req, res) => {
    const { _id } = req.query;
    const user = mongoose.model('user');
    user.findOne({
    _id
    }).then( data => {
        if ( data ){
            res.send({ code: 0, message: '查询成功!', messageBody: data })
        } else {
            res.send({ code: 1, message: '查询失败!', messageBody: null})
        }
    }).catch( err => {
        res.send({ code: 5, message: '查询失败!', messageBody: null});
    })
});
//更新编辑信息
router.post('/postEdit', ( req, res) => {
    const { _id } = req.body;
    const user = mongoose.model('user');
    console.log(req.body);
    user.update({
        _id
    }, req.body).then( data => {
        res.send({
            code: 0,
            message: '保存成功!',
            messageBody: null
        })
    }).catch( err => {
        res.send({
            code: 5,
            message: '保存失败!',
            messageBody: null
        })
    });
});
//删除招聘信息
router.post('/deleteHire', ( req, res) => {
    const { _id } = req.body;
    const user = mongoose.model('user');
    user.findOne({
    _id
    }).then( data => {
        !data && res.send( { code: 1, message: '此招聘信息不存在!', messageBody: null })
        if (data){
            data.salary = '';
            data.info = '';
            data.post = '';
            data.company = '';
            user.update({
                _id
            }, data).then( data => {
                res.send( { code: 0, message: '删除招聘信息成功!', messageBody: null})
            });
        }
    }).catch( err => {
        res.send({ code: 5, message: '删除失败!', messageBody: null});
    })
});

module.exports = router;

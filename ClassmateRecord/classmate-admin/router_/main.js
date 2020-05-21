const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const MainController = require('../controller/index.js');

const upload = multer({
    dest: path.join(__dirname + '../../public/uploads')
});
router.post('/classMate/list', (req, res) => {
    MainController.getClassMateWord(req, res);
});

router.post('/classMate/add', (req, res) => {
    MainController.addClassMateWord(req, res);
});

router.post('/classMate/update', (req, res) => {
    MainController.updateClassMateWord(req, res);
});

router.post('/classMate/delete', (req, res) => {
    MainController.deleteClassMateWord(req, res);
});

router.post('/personal/list', (req, res) => {
    MainController.getPersonalWord(req, res);
});

router.post('/personal/add', (req, res) => {
    MainController.addPersonalWord(req, res);
});

router.post('/personal/update', (req, res) => {
    MainController.updatePersonalWord(req, res);
});

router.post('/personal/delete', (req, res) => {
    MainController.deletePersonalWord(req, res);
});

router.post('/phone/list', (req, res) => {
    MainController.getPhoneInfo(req, res);
});

router.post('/phone/add', (req, res) => {
    MainController.addPhoneInfo(req, res);
});

router.post('/phone/update', (req, res) => {
    MainController.updatePhoneInfo(req, res);
});

router.post('/phone/delete', (req, res) => {
    MainController.deletePhoneInfo(req, res);
});

router.post('/user/list', (req, res) => {
    MainController.getMessage(req, res);
});

router.post('/user/update', (req, res) => {
    MainController.updateMessage(req, res);
});

router.post('/user/delete', (req, res) => {
    MainController.deleteMessage(req, res);
});

router.post('/category/list', (req, res) => {
    MainController.getCategoryList(req, res);
});

router.post('/category/add', (req, res) => {
    MainController.addCategory(req, res)
});

router.post('/category/delete', (req, res) => {
    MainController.deleteCategory(req, res)
});

router.post('/picture/list', (req, res) => {
    MainController.getPictureList(req, res);
});

router.post('/picture/add', (req, res) => {
    MainController.addPicture(req, res)
});

router.post('/picture/delete', (req, res) => {
    MainController.deletePicture(req, res)
});

router.post('/picture/upload', upload.single('file'), (req, res) => {
    console.log(req.file);

    fs.readFile(req.file.path, (err,data) => {
        //读取失败，说明没有上传成功
        if(err){return res.send('上传失败')}
        //否则读取成功，开始写入
        //我们先尝试用原文件名originalname写入吧
        // 三个参数
        //1.图片的绝对路径
        //2.写入的内容
        //3.回调函数
        fs.writeFile(path.join(__dirname,'../public/uploads/' + req.file.originalname),data,(err)=>{
            if(err){return res.send({code: 5, message: '上传失败!', messageBody: null })}
            res.send({ code: 0, message:'上传成功!', messageBody: '/public/uploads/' + req.file.originalname})
        })
    });
});

module.exports = router;


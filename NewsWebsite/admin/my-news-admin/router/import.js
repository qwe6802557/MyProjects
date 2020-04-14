const express=require('express');
const router=express.Router();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
//导入banner图数据到数据库
router.get('/banner', (req, res) => {
    fs.readFile( path.join(__dirname, '../datajson/banner.json'), 'utf-8', (err, data) => {
        if (err){
            res.send('banner图写入数据库失败!');
            throw err;
        } else {
            const banner = mongoose.model('Banner');
            data = JSON.parse(data).banners;
            banner.collection.insert(data).then( data => {
                res.send('banner图插入数据库成功!');
            }).catch( err => {
                res.send('banner图插入数据库失败!');
            })
        }
    })
});
//导入新闻信息数据到数据库
router.get('/news', (req, res) => {
    fs.readFile( path.join(__dirname, '../datajson/news.json'), 'utf-8', (err, data) => {
        if (err){
            res.send('新闻数据写入数据库失败!');
            throw err;
        } else {
            const news = mongoose.model('News');
            const inNews = JSON.parse(data).inNews;
            const outNews = JSON.parse(data).outNews;
            const skillNews = JSON.parse(data).skillNews;
            const newsData = inNews.concat(outNews).concat(skillNews);
            news.collection.insert(newsData).then( data => {
                res.send('新闻数据插入数据库成功!');
            }).catch( err => {
                res.send('新闻数据插入数据库失败!');
                throw err;
            })
        }
    })
});
//导入热门视频数据到数据库
router.get('/hotVideos', (req, res) => {
    fs.readFile( path.join(__dirname, '../datajson/hotVideos.json'), 'utf-8', (err, data) => {
        if (err){
            res.send('热门视频数据写入数据库失败!');
            throw err;
        } else {
            const videos = mongoose.model('Videos');
            data = JSON.parse(data).hotVideos;
            videos.collection.insert(data).then( data => {
                res.send('热门视频数据插入数据库成功!');
            }).catch( err => {
                res.send('热门视频数据插入数据库失败!');
            })
        }
    })
});
//导入常见问题和top框架到数据库
router.get('/messageCenter', (req, res) => {
    fs.readFile( path.join(__dirname, '../datajson/messageCenter.json'), 'utf-8', (err, data) => {
        if (err){
            res.send('资讯中心数据写入数据库失败!');
            throw err;
        } else {
            const messageCenter = mongoose.model('MessageCenter');
            const normalQuestions = JSON.parse(data).normalQuestions;
            const topData = JSON.parse(data).topData;
            messageCenter.collection.insert(normalQuestions.concat(topData)).then( data => {
                res.send('资讯中心数据插入数据库成功!');
            }).catch( err => {
                res.send('资讯中心数据插入数据库失败!');
            })
        }
    })
});

module.exports = router;
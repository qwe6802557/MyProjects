const express=require('express');
const router=express.Router();
const NewsController = require('../controller/news.js');

router.get('/banner', (req, res) => {
   NewsController.getBanner(res);
});

router.get('/home', (req, res) => {
   NewsController.getHome(req, res);
});

router.get('/hotNews', (req, res) => {
   NewsController.getHotNews(req, res);
});

router.get('/hotVideos', (req, res) => {
   NewsController.getHotVideos(req, res);
});

router.get('/messageCenter', (req, res) => {
   NewsController.getMessageCenter(req, res);
});

router.get('/weatherList', (req, res) => {
   NewsController.getWeatherList(req, res);
});

router.post('/goodAndCollection', (req, res) => {
   NewsController.goodAndCollection(req, res);
});

module.exports = router;
/**
 * 新闻管理Service层
 */
const mongoose = require('mongoose');

class NewsService {

    static async getBanner () {
        const banner = mongoose.model('Banner');
        const data = await banner.find();
        return data;
    }

    static async getHome (req) {
        const curPage = req.query.curPage || 1; //当前页数 默认第1页
        const pageSize = req.query.pageSize || 8; //当前显示条数 默认8条
        const type = req.query.type || 0; //当前查询新闻类别 默认国内新闻
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const news = mongoose.model('News');
        const searchCondition = {type};
        const count = await news.countDocuments(searchCondition);
        const result = await news.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async getHotNews (req) {
        const curPage = req.query.curPage || 1; //当前页数 默认第1页
        const pageSize = req.query.pageSize || 8; //当前显示条数 默认8条
        const keyword = req.query.keyword || ''; //当前查询新闻类别 默认国内新闻
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const news = mongoose.model('News');
        const searchCondition = {
            $or:[
                { title: { $regex: keyword }},
                { content: { $regex: keyword }}
            ],
            isHot: 1
        };
        const count = await news.countDocuments(searchCondition);
        const result = await news.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async getHotVideos (req) {
        const curPage = req.query.curPage || 1; //当前页数 默认第1页
        const pageSize = req.query.pageSize || 8; //当前显示条数 默认8条
        const keyword = req.query.keyword || ''; //当前查询新闻类别 默认国内新闻
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const videos = mongoose.model('Videos');
        const searchCondition = {
            $or:[
                { title: { $regex: keyword }},
                { content: { $regex: keyword }}
            ]
        };
        const count = await videos.countDocuments(searchCondition);
        const result = await videos.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async getMessageCenter (req) {
        const curPage = req.query.curPage || 1; //当前页数 默认第1页
        const pageSize = req.query.pageSize || 8; //当前显示条数 默认8条
        const type = req.query.type || 0; //当前查询新闻类别 默认国内新闻
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const messageCenter = mongoose.model('MessageCenter');
        const searchCondition = {type};
        const count = await messageCenter.countDocuments(searchCondition);
        let result = await messageCenter.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async getWeatherList (req, res) {
        const request = require('request');
        const cityList = req.query.city.split(',');
        const result = [];
        cityList.map( item => {
             request.get({
                        url: encodeURI(`http://api.map.baidu.com/telematics/v3/weather?location=${item}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`),
                    }, (err , data, body) => {
                        if (data.statusCode === 200){
                            result.push({ name: item, list: JSON.parse(body).results[0].weather_data});
                        } else {
                            result.push(' ');
                        }
                         if (result.length === cityList.length){
                             res.send({ code: 0 , message: '查询成功!', messageBody: result });
                         }
                    });
        });
    }

    static async goodAndCollection (req) {
        const { id, type } = req.body;
        const collection = mongoose.model('Collection');
        const messageCenter = mongoose.model('MessageCenter');
        const singleCollection =await collection.findOne({
            userId: req.session.payload._id,
            listId: id,
            type: Number(type)
        });
        if (singleCollection){
            await collection.remove({
                userId: req.session.payload._id,
                listId: id,
                type: Number(type)
            });
            const result = await messageCenter.findOne({
               _id: id
            });
            if (Number(type) === 0){
                result.collectionNum  = result.collectionNum - 1;
                result.isCollection = 0;
            } else if (Number(type) === 1){
                result.goodNum  = result.goodNum - 1;
                result.isGood = 0;
            }
            await messageCenter.update({
                _id: id
            }, result);
            return true;
        } else {
            await collection.create({
                userId: req.session.payload._id,
                listId: id,
                type: Number(type)
            });
            const result = await messageCenter.findOne({
                _id: id
            });
            if (Number(type) === 0){
                result.collectionNum  = result.collectionNum + 1;
                result.isCollection = 1;
            } else if (Number(type) === 1){
                result.goodNum  = result.goodNum + 1;
                result.isGood = 1;
            }
            await messageCenter.updateOne({
                _id: id
            }, result);
            return true;
        }
    }
}
module.exports = NewsService;
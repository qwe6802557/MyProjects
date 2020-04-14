/**
 * 新闻管理控制器(带banner)
 */
const NewsService = require('../service/news.js');

class NewsController {
    //获取轮播图
    static async getBanner (res) {
        try {
            const result = await NewsService.getBanner();
            if (result){
                res.send( { code: 0, message: '轮播图获取成功!', messageBody: result });
            } else {
                res.send({ code: 1, message: '轮播图没有数据!', messageBody: null });
            }
        }catch (e) {
            res.send({ code: 5, message: '轮播图获取失败!', messageBody: null });
            throw e;
        }
    }
    //获取新闻分类
    static async getHome (req, res) {
        try{
            const result = await NewsService.getHome(req);
            res.send({ code: 0, message: '查询成功!', messageBody: result });
        }catch (e) {
            res.send( { code: 5, message: '查询失败!', messageBody: null });
            throw e;
        }
    }
    //获取热门新闻
    static async getHotNews (req, res) {
        try{
            const result = await NewsService.getHotNews(req);
            res.send({ code: 0, message: '查询成功!', messageBody: result });
        }catch (e) {
            res.send( { code: 5, message: '查询失败!', messageBody: null });
            throw e;
        }
    }
    //获取热门视频
    static async getHotVideos (req, res) {
        try{
            const result = await NewsService.getHotVideos(req);
            res.send({ code: 0, message: '查询成功!', messageBody: result });
        }catch (e) {
            res.send( { code: 5, message: '查询失败!', messageBody: null });
            throw e;
        }
    }
    //获取资讯中心信息
    static async getMessageCenter (req, res) {
        try{
            const result = await NewsService.getMessageCenter(req);
            res.send({ code: 0, message: '查询成功!', messageBody: result });
        }catch (e) {
            res.send( { code: 5, message: '查询失败!', messageBody: null });
            throw e;
        }
    }
    //获取天气列表信息
    static async getWeatherList (req, res) {
            await NewsService.getWeatherList(req, res);
    }
    //点赞和收藏功能
    static async goodAndCollection (req, res) {
       try {
           await NewsService.goodAndCollection(req, res);
           res.send( { code: 0, message: '操作成功!', messageBody: null })
       }catch (e) {
           res.send( { code: 5, message: '操作失败!', messageBody: null })
       }
    };
}
module.exports = NewsController;
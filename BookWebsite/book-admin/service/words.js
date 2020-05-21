/**
 * 留言管理--service
 */
const { Words, user } = require('../database/index').models;
const moment = require('moment');
class WordsService {
    // 留言列表及分页查询
    static async getWordsList (ctx){
        const { curPage, pageSize } = ctx.request.body;

        const current = curPage ? parseInt(curPage) : 1;
        const size = pageSize ? parseInt(pageSize) : 10;
        const offset = (current - 1) * size;
        const limit = size;

        const result = await Words.findAll({
            raw: true,
            include: user,
            offset,
            limit,
        });

        result.map( item => {
            if (item.userId === ctx.session.payload.id){
                item.isSelf = true;
            } else {
                item.isSelf = false;
            }

            item.createAt = moment(item.createAt).format('YYYY-MM-DD hh:mm:ss');
        });

        return result;
    }

    static async addWords (ctx){
        const { words, wordsType, userId } = ctx.request.body;

        await Words.create({
            userId,
            words,
            wordsType: wordsType.toString()
        });

        return true;
    }

    static async deleteWords (ctx){
        const { id } = ctx.request.body;

        await Words.destroy({
            where: {
                id,
            }
        });

        return true;
    }
}

module.exports = WordsService;
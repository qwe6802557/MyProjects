/**
 * 留言管理 controller
 */
const wordsService = require('../service/words');

class WordsController {

    static async getWordsList (ctx) {
            try {
               const result =  await wordsService.getWordsList(ctx);

                ctx.body = {
                    code: 0,
                    message: '查询留言成功!',
                    messageBody: result
                }
            }catch (e) {
                ctx.body = {
                    code: 5,
                    message: '查询留言失败!',
                    messageBody: null
                };
                throw e;
            }
    }

    static async addWords(ctx) {
        try {
            await wordsService.addWords(ctx);

            ctx.body = {
                code: 0,
                message: '留言成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '留言失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async deleteWordsList (ctx) {
        try {
            await wordsService.deleteWords(ctx);

            ctx.body = {
                code: 0,
                message: '删除留言成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '删除留言失败!',
                messageBody: null
            };
            throw e;
        }
    }
}

module.exports = WordsController;
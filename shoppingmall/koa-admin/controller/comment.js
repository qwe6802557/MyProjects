
const commentService = require('../service/comment');
class CommentController {
    // 获取评论
    static async getComment (ctx) {

        try {
            const result = await commentService.getComment(ctx);

            ctx.body = {
                code : 0,
                message: '查询成功!',
                messageBody: result
            };
        }catch (e) {
            ctx.body = {
                code : 5,
                message: '查询失败!',
                messageBody: null
            };
        }
    }

    // 新增评论
    static async addComment (ctx) {

        try {
            await commentService.addComment(ctx);

            ctx.body = {
                code : 0,
                message: '评论成功!',
                messageBody: null
            };
        }catch (e) {
            ctx.body = {
                code : 5,
                message: '评论失败!',
                messageBody: null
            };
            throw e;
        }
    }
}

module.exports = CommentController;
/**
 * 评论service
 */
const { code } = require('../database/index').models;
const commentModel = require('../database/index').models.comment;
class CommentService {

    static async getComment(ctx) {
        const { goodsId } = ctx.request.body;
        const result = await commentModel.findAll({
            where: {
                goodsId,
            },
            raw: true
        });

        return result;
    }

    static async addComment(ctx) {
        const {  comment, goodsId, score  } = ctx.request.body;
        const result_user = await code.findOne({
            raw: true,
        });
        const userEmail = result_user.email;

        await commentModel.create({
            score,
            comment,
            goodsId,
            userEmail,
        });

        return true;
    }
}

module.exports = CommentService;
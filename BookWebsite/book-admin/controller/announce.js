/**
 * 公告管理 controller
 */
const announceService = require('../service/announce');

class AnnounceController {

     static async getAnnounceList (ctx) {
        try {
            const result =  await announceService.getAnnounceList(ctx);

            ctx.body = {
                code: 0,
                message: '查询公告成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '查询公告失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async addAnnounce(ctx) {
        try {
            const result = await announceService.addAnnounce(ctx);

            if (result){
                ctx.body = {
                    code: 0,
                    message: '添加公告成功!',
                    messageBody: null
                }
            } else {
                ctx.body = {
                    code: 1,
                    message: '图书推荐公告数量超出限制!',
                    messageBody: null
                }
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '添加公告失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async announceInit (ctx) {
        try {
            const result = await announceService.announceInit(ctx);

            ctx.body = {
                code: 0,
                message: '查询公告成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '查询公告失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async updateAnnounce(ctx) {
        try {
            await announceService.updateAnnounce(ctx);

            ctx.body = {
                code: 0,
                message: '更新公告成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '更新公告失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async deleteAnnounce(ctx) {
        try {
            await announceService.deleteAnnounce(ctx);

            ctx.body = {
                code: 0,
                message: '删除公告成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '删除公告失败!',
                messageBody: null
            };
            throw e;
        }
    }
}

module.exports = AnnounceController;
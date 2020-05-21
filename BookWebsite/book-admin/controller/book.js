/**
 * 图书管理 controller
 */
const bookService = require('../service/book');

class BookController {

    static async getBookList (ctx) {
        try {
           const result =  await bookService.getBookList(ctx);

            ctx.body = {
                code: 0,
                message: '查询成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '查询失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async setCommentBook (ctx) {
        try {
            const result =  await bookService.setCommentBook(ctx);

            ctx.body = {
                code: 0,
                message: '设置成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '设置失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async addBook(ctx) {
        try {
            await bookService.addBook(ctx);

            ctx.body = {
                code: 0,
                message: '发布成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '发布失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async updateBook(ctx) {
        try {
            await bookService.updateBook(ctx);

            ctx.body = {
                code: 0,
                message: '更新成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '更新失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async deleteBook (ctx) {
        try {
            await bookService.deleteBooks(ctx);

            ctx.body = {
                code: 0,
                message: '删除成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '删除失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async getSelfBooks (ctx) {
        try {
            const result = await bookService.getSelfBooks(ctx);

            ctx.body = {
                code: 0,
                message: '查询成功!',
                messageBody: result,
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '查询失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async getBookCategory (ctx) {
        try {
            const result = await bookService.getBookCategory(ctx);

            ctx.body = {
                code: 0,
                message: '查询成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '查询失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async buyOrGiveBook (ctx) {
        try {
            await bookService.buyOrGiveBook(ctx);

            ctx.body = {
                code: 0,
                message: '申请成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '申请失败!',
                messageBody: null
            };
            throw e;
        }
    }

    /**
     * 同意或者拒绝
     * @param ctx
     * @returns {Promise<void>}
     */
    static async agreeOrReject (ctx) {
        try {
            await bookService.agreeOrReject(ctx);

            ctx.body = {
                code: 0,
                message: '处理成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '处理失败!',
                messageBody: null
            };
            throw e;
        }
    }

    /**
     * 评价图书
     * @param ctx
     * @returns {Promise<void>}
     */
    static async commentBook (ctx) {
        try {
            await bookService.commentBook(ctx);

            ctx.body = {
                code: 0,
                message: '评价成功!',
                messageBody: null
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '评价失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async getMessageList (ctx) {
        try {
            const result = await bookService.getMessageList(ctx);

            ctx.body = {
                code: 0,
                message: '获取消息成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '获取消息失败!',
                messageBody: null
            };
            throw e;
        }
    }

    static async confirmMessage (ctx) {
        try {
            const result = await bookService.confirmMessage(ctx);

            ctx.body = {
                code: 0,
                message: '处理成功!',
                messageBody: result
            }
        }catch (e) {
            ctx.body = {
                code: 5,
                message: '处理失败!',
                messageBody: null
            };
            throw e;
        }
    }
}

module.exports = BookController;
/**
 * 图书管理--service
 */
const { book, user, message, record, comment, bookCategory } = require('../database/index').models;
const { defineProperty } = require('../untils/method');
const Sequelize = require('sequelize');
const moment = require('moment');
class BookService {
    // 图书列表及分页查询
    static async getBookList (ctx){
        const { curPage, pageSize, bookName, categoryId } = ctx.request.body;
        const searchCondition = {};

        const current = curPage ? parseInt(curPage) : 1;
        const size = pageSize ? parseInt(pageSize) : 10;
        const offset = (current - 1) * size;
        const limit = size;

        !!bookName && defineProperty(searchCondition, 'bookName', {
            [Sequelize.Op.like]: `%${bookName}%`
        });

        !!categoryId && defineProperty(searchCondition, 'categoryId', categoryId);

        const result = await book.findAll({
            where: searchCondition,
            raw: true,
            include: [{
                model: user,
                attributes: ['id', 'username']
            }, {
                model: bookCategory,
                attributes: ['id', 'categoryName']
            },],
            offset,
            limit,
        });

        const result_user = await message.findAll({
            where: {
                userId: ctx.session.payload.id,
                messageType: '0'
            },
            raw: true,
        });

        const result_record = await record.findAll({
            where: {
                friendId: ctx.session.payload.id,
            },
            raw: true,
        });

        const result_comment = await comment.findAll({
            where: {
                userId: ctx.session.payload.id
            },
            raw: true,
        });
        /**
         * 判断是否为自己所发布的图书
         */
        result.map( item => {
            if (item.userId === ctx.session.payload.id){
                item.isSelf = true;
            } else {
                item.isSelf = false;
            }
        });

        /**
         * 每一本书已经有人发送了购买或索要请求
         */
        if (result_user.length > 0){
            result_user.map( cItem => {
                result.map( item => {
                    if (cItem.bookId === item.id){
                        cItem.requestType === '0' && defineProperty(item, 'isBuying', true);
                        cItem.requestType === '1' && defineProperty(item, 'isWanting', true);
                    } else {
                        defineProperty(item, 'isBuying', false);
                        defineProperty(item, 'isWanting', false);
                    }
                });
            });
        } else {
            result.map( item => {
                defineProperty(item, 'isBuying', false);
                defineProperty(item, 'isWanting', false);
            });
        }

        /**
         * 判断该登录用户是否曾购买过该图书
         */
        if (result_record.length > 0){
            result_record.map( cItem => {
                result.map( item => {
                    if (cItem.bookId === item.id){
                        cItem.recordType === '0' && defineProperty(item, 'isBuy', true);
                        cItem.recordType === '1' && defineProperty(item, 'isGive', true);
                    } else {
                        defineProperty(item, 'isBuy', false);
                        defineProperty(item, 'isGive', false);
                    }
                });
            });
        } else {
            result.map( item => {
                defineProperty(item, 'isBuy', false);
                defineProperty(item, 'isGive', false);
            });
        }

        if (result_comment.length > 0){
            result_comment.map( eItem => {
                result.map(item => {
                    if (eItem.bookId === item.id) {
                        defineProperty(item, 'isComment', true);
                    } else {
                        defineProperty(item, 'isComment', false);
                    }
                })
            });
        } else {
            result.map( item => {
                defineProperty(item, 'isComment', false);
            });
        }

        return result;
    }

    static async addBook (ctx){
        const { categoryId, bookName, bookPic, bookQuality,
            bookOriginPrice, bookSellPrice, publishHouse, bookAuthor } = ctx.request.body;
        const userId = ctx.session.payload.id;

        await book.create({
            categoryId,
            bookName,
            bookPic,
            bookQuality,
            bookOriginPrice,
            bookSellPrice,
            publishHouse,
            bookAuthor,
            userId
        });

        return true;
    }

    static async updateBook (ctx){
        const { categoryId, bookName, bookPic, bookQuality,
            bookOriginPrice, bookSellPrice, publishHouse, bookAuthor, id } = ctx.request.body;

        await book.update({
            categoryId,
            bookName,
            bookPic,
            bookQuality,
            bookOriginPrice,
            bookSellPrice,
            publishHouse,
            bookAuthor
        }, {
            where: {
                id
            }
        });

        return true;
    }

    static async deleteBooks (ctx){
        const { id } = ctx.request.body;

        await book.destroy({
            where: {
                id,
            },
            raw: true,
        });

        return true;
    }

    // 设为推荐
    static async setCommentBook (ctx) {
        const { id, isHot } = ctx.request.body;

        const result = await book.update({
            isHot,
        },{
            where: {
               id
            },
            raw: true,
        });

        return result;
    }

    // 查询个人分享图书
    static async getSelfBooks (ctx) {
        const { curPage, pageSize, bookName } = ctx.request.body;
        const id = ctx.session.payload.id;
        const searchCondition = {
            userId: id,
        };

        const current = curPage ? parseInt(curPage) : 1;
        const size = pageSize ? parseInt(pageSize) : 10;
        const offset = (current - 1) * size;
        const limit = size;


        !!bookName && defineProperty(searchCondition, 'bookName', {
            [Sequelize.Op.like]: `%${bookName}%`
        });

        const result = await book.findAll({
            where: searchCondition,
            raw: true,
            offset,
            limit
        });

        return result;
    }

    // 获取图书目录
    static async getBookCategory () {
        const result = await bookCategory.findAll({
            raw: true,
        });

        return result;
    }

    /**
     * 购买/索要 0 1
     * @param ctx
     * @returns {Promise<void>}
     */
    static async buyOrGiveBook (ctx) {
        const { messageContent, type, userId, bookId } = ctx.request.body;
        const username = ctx.session.payload.username;
        const reqUserId = ctx.session.payload.id;
        const typeStr = type.toString() === '0' && '购买图书' || type.toString() === '1' && '索要图书';

        const messageTitle1 = `收到一条来自${username}的${typeStr}的消息`;

               await message.create({
                   messageTitle: messageTitle1,
                   userId,
                   friendId: reqUserId,
                   messageContent: type.toString() === '0' && '' || messageContent,
                   bookId
               });
    }

    /**
     * 同意或拒绝请求
     * @param ctx  1 同意 2 拒绝
     * @returns {Promise<void>}
     */
    static async agreeOrReject (ctx) {
        const { id, type, phone } = ctx.request.body;
        const userInfo = ctx.session.payload;
        const messageTitle = `${userInfo.username}已${Number(type) === 1 ? '同意' : '拒绝'}了你的请求`;

        const result_message = await message.findOne({
            where: {
                id
            },
            raw: true,
        });
            await message.update({
                    messageType: type.toString(),
                    messagePhone: phone || '',
                    messageTitle
                }, {
                    where: {
                        id,
                    },
            });

            if (Number(type) === 1){
                await book.update({
                    bookStatus: result_message.requestType === '0' ? '2' : '1'
                }, {
                    where: {
                        id: result_message.bookId,
                    }
                });

                await record.create({
                    userId: result_message.userId,
                    friendId: result_message.friendId,
                    bookId: result_message.bookId,
                    recordType: result_message.requestType,
                });
            }
    }

    /**
     * 评价图书
     * @param ctx
     * @returns {Promise<boolean>}
     */
    static async commentBook (ctx) {
        const { bookId } = ctx.request.body;
        const userId = ctx.session.payload.id;
        await comment.create({
            bookId,
            comment: ctx.request.body.comment,
            userId,
        });

        return true;
    };

    // 获取消息列表
    static async getMessageList (ctx) {
        const userId = ctx.session.payload.id;
        const result_unHandle = await message.findAll({
            where: {
                userId,
                messageType: '0',
            },
            include: [{
                model: book,
                attributes: ['bookName']
            }, {
                model: user,
                attributes: ['userName']
            }],
            raw: true,
        });

        const result_agree = await message.findAll({
            where: {
                friendId: userId,
                messageType: '1',
            },
            include: [{
                model: book,
                attributes: ['bookName']
            }, {
                model: user,
                attributes: ['userName']
            }],
            raw: true,
        });

        const result_reject = await message.findAll({
            where: {
                friendId: userId,
                messageType: '2',
            },
            include: [{
                model: book,
                attributes: ['bookName']
            }, {
                model: user,
                attributes: ['userName']
            }],
            raw: true,
        });

        const result_all = result_unHandle.concat(result_agree).concat(result_reject);

        result_all.map(item => {
            item.createAt = moment(item.createAt).format('YYYY-MM-DD hh:mm:ss');
        });

        return result_all;
    };

    static async confirmMessage (ctx) {
        const { id } = ctx.request.body;

        await message.destroy({
            where: {
                id
            }
        });

        return true;
    }
}

module.exports = BookService;
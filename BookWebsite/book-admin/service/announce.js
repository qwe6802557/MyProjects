/**
 * 公告管理 service
 */
const { announce, book, announceCategory } = require('../database/index').models;
const { defineProperty } = require('../untils/method');
const { Sequelize } = require('sequelize');
const moment = require('moment');
class AnnounceService {

    static async getAnnounceList (ctx) {
        const { curPage, pageSize, announceTitle } = ctx.request.body;
        const searchCondition = {};
        const current = curPage ? parseInt(curPage) : 1;
        const size = pageSize ? parseInt(pageSize) : 10;
        const offset = (current - 1) * size;
        const limit = size;

        !!announceTitle && defineProperty(searchCondition, 'announceTitle', {
            [Sequelize.Op.like]: `%${announceTitle}%`
        });

        const result = await announce.findAll({
            where: searchCondition,
            raw: true,
            offset,
            limit,
            include: announceCategory
        });


        return result;
    }

    static async announceInit () {

        const result_important = await announce.findAll({
            where: {
                categoryId: 1,
                announceStatus: '1'
            },
            raw: true,
            offset: 0,
            limit: 10
        });

        const result_attention = await announce.findAll({
            where: {
                categoryId: 2,
                announceStatus: '1'
            },
            raw: true,
            offset: 0,
            limit: 10
        });

        const commentBook = await book.findAll({
            where: {
                isHot: '1'
            },
            raw: true,
            offset: 0,
            limit: 10,
        });

        result_attention.map(item => {
            item.createAt = moment(item.createAt).format('YYYY-MM-DD hh:mm:ss');
        });

        result_important.map(item => {
            item.createAt = moment(item.createAt).format('YYYY-MM-DD hh:mm:ss');
        });

        return {important: result_important, attention: result_attention, commentBook,};
    }

    static async addAnnounce (ctx) {
        const { categoryId, announceTitle, announceContent, announceStatus } = ctx.request.body;

        if (Number(categoryId) === 3){
         const result = await announce.findOne({
                where: {
                    categoryId: 3
                },
                raw: true,
            });

         if (result){
             return false;
         }
        }

        await announce.create({
            categoryId,
            announceTitle,
            announceContent,
            announceStatus: announceStatus.toString()
        });

        return true;
    }

    static async updateAnnounce(ctx) {
        const { id, announceTitle, announceContent, announceStatus, categoryId } = ctx.request.body;

        await announce.update({
            categoryId: Number(categoryId),
            announceTitle,
            announceContent,
            announceStatus: announceStatus.toString()
        }, {
            where: {
                id
            }
        });

        return true;
    }

    static async deleteAnnounce(ctx) {
        const { id } = ctx.request.body;

        await announce.destroy({
            where: {
                id
            }
        });

        return true;
    }


}

module.exports = AnnounceService;


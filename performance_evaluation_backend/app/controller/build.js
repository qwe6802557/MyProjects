/**
 * 学科建设部分controller
 */
const BuildService = require('../service/build');
class BuildController {
    /**
     * 学科建设部分
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async addBuild (req, res) {
        try {
            await BuildService.addBuild(req);

            res.send({
                code: 0,
                message: '添加成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '添加失败!',
                messageBody: null
            });

            throw e;
        }
    }

    static async updateBuild (req, res) {
        try {
            await BuildService.updateBuild(req);

            res.send({
                code: 0,
                message: '更新成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '更新失败!',
                messageBody: null
            });

            throw e;
        }
    }

    static async deleteBuild (req, res) {
        try {
            await BuildService.deleteBuild(req);

            res.send({
                code: 0,
                message: '删除成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '删除失败!',
                messageBody: null
            });

            throw e;
        }
    }
    /**
     * 研究生工作部分
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async addWork (req, res) {
        try {
            await BuildService.addWork(req);

            res.send({
                code: 0,
                message: '添加成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '添加失败!',
                messageBody: null
            });

            throw e;
        }
    }

    static async updateWork (req, res) {
        try {
            await BuildService.updateWork(req);

            res.send({
                code: 0,
                message: '更新成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '更新失败!',
                messageBody: null
            });

            throw e;
        }
    }

    static async deleteWork (req, res) {
        try {
            await BuildService.deleteWork(req);

            res.send({
                code: 0,
                message: '删除成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '删除失败!',
                messageBody: null
            });

            throw e;
        }
    }
    /**
     * 人才引进部分
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async addTalent (req, res) {
        try {
            await BuildService.addTalent(req);

            res.send({
                code: 0,
                message: '添加成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '添加失败!',
                messageBody: null
            });

            throw e;
        }
    }

    static async updateTalent (req, res) {
        try {
            await BuildService.updateTalent(req);

            res.send({
                code: 0,
                message: '更新成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '更新失败!',
                messageBody: null
            });

            throw e;
        }
    }

    static async deleteTalent (req, res) {
        try {
            await BuildService.deleteTalent(req);

            res.send({
                code: 0,
                message: '删除成功!',
                messageBody: null
            })
        }catch (e) {
            res.send({
                code: 5,
                message: '删除失败!',
                messageBody: null
            });

            throw e;
        }
    }
}

module.exports = BuildController;
/**
 * 主程序controller
 */
const MainService = require('../service/index');
class MainController {
    /**
     * 班级留言区域
     * @returns {Promise<void>}
     */
    static async getClassMateWord (req, res) {

        try {
            const result = await MainService.getClassMateWord(req);

            res.send({ code: 0, message: '查询成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '查询失败!', messageBody: null })
            throw e;
        }
    }

    static async addClassMateWord (req, res) {

        try {
            await MainService.addClassMateWord(req);

            res.send({ code: 0, message: '添加成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '添加失败!', messageBody: null })

            throw e;
        }
    }

    static async updateClassMateWord (req, res) {
        try {
            await MainService.updateClassMateWord(req);

            res.send({ code: 0, message: '更新成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '更新失败!', messageBody: null })
        }
    }

    static async deleteClassMateWord (req, res) {
        try {
            await MainService.deleteClassMateWord(req);

            res.send({ code: 0, message: '删除成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '删除失败!', messageBody: null })
        }
    }

    /**
     * 个人留言区域
     * @returns {Promise<void>}
     */
    static async getPersonalWord (req, res) {

        try {
            const result = await MainService.getPersonalWord(req);

            res.send({ code: 0, message: '查询成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '查询失败!', messageBody: null })
        }
    }

    static async addPersonalWord(req, res) {

        try {
            await MainService.addPersonalWord(req);

            res.send({ code: 0, message: '添加成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '添加失败!', messageBody: null })
        }
    }

    static async updatePersonalWord (req, res) {
        try {
            await MainService.updatePersonalWord(req);

            res.send({ code: 0, message: '更新成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '更新失败!', messageBody: null })
        }
    }

    static async deletePersonalWord (req, res) {
        try {
            await MainService.deletePersonalWord(req);

            res.send({ code: 0, message: '删除成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '删除失败!', messageBody: null })
        }
    }

    /**
     * 通讯录管理区域
     * @returns {Promise<void>}
     */
    static async getPhoneInfo (req, res) {

        try {
            const result = await MainService.getPhoneInfo(req);

            res.send({ code: 0, message: '查询成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '查询失败!', messageBody: null });
            throw e;
        }
    }

    static async addPhoneInfo(req, res) {

        try {
            await MainService.addPhoneInfo(req);

            res.send({ code: 0, message: '添加成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '添加失败!', messageBody: null });
            throw e;
        }
    }

    static async updatePhoneInfo (req, res) {
        try {
            await MainService.updatePhoneInfo(req);

            res.send({ code: 0, message: '更新成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '更新失败!', messageBody: null });
            throw e;
        }
    }

    static async deletePhoneInfo (req, res) {
        try {
            await MainService.deletePhoneInfo(req);

            res.send({ code: 0, message: '删除成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '删除失败!', messageBody: null });
            throw e;
        }
    }

    /**
     * 信息管理区域
     * @returns {Promise<void>}
     */
    static async getMessage (req, res) {

        try {
            const result = await MainService.getMessage(req);

            res.send({ code: 0, message: '查询成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '查询失败!', messageBody: null })
        }
    }

    static async updateMessage (req, res) {
        try {
            const result = await MainService.updateMessage(req);

            res.send({ code: 0, message: '更新成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '更新失败!', messageBody: null });
            throw e;
        }
    }

    static async deleteMessage (req, res) {
        try {
            await MainService.deleteMessage(req);

            res.send({ code: 0, message: '删除成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '删除失败!', messageBody: null })
        }
    }

    /**
     * 相册区域
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getCategoryList (req, res) {

        try {
            const result = await MainService.getCategoryList(req);

            res.send({ code: 0, message: '查询成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '查询失败!', messageBody: null })
        }
    }

    static async addCategory (req, res) {
        try {
            const result = await MainService.addCategory(req);

            res.send({ code: 0, message: '添加成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '添加失败!', messageBody: null });
            throw e;
        }
    }

    static async deleteCategory (req, res) {
        try {
            await MainService.deleteCategory(req);

            res.send({ code: 0, message: '删除成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '删除失败!', messageBody: null })
        }
    }

    /**
     * 相册图片区域
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getPictureList (req, res) {

        try {
            const result = await MainService.getPictureList(req);

            res.send({ code: 0, message: '查询成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '查询失败!', messageBody: null })
        }
    }

    static async addPicture (req, res) {
        try {
            const result = await MainService.addPicture(req);

            res.send({ code: 0, message: '添加成功!', messageBody: result })
        }catch (e) {
            res.send({ code: 5, message: '添加失败!', messageBody: null });
            throw e;
        }
    }

    static async deletePicture (req, res) {
        try {
            await MainService.deletePicture(req);

            res.send({ code: 0, message: '删除成功!', messageBody: null })
        }catch (e) {
            res.send({ code: 5, message: '删除失败!', messageBody: null })
        }
    }

}

module.exports = MainController;
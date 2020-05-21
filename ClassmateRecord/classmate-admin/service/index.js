/**
 * 主程序service
 */
const mongoose = require('mongoose');

class MainService {
    /**
     * 班级留言区域
     * @returns {Promise<{total: *, data: *}>}
     */
    static async getClassMateWord (req) {
        const { curPage, pageSize, creator } = req.body;
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const words = mongoose.model('Words');
        const searchCondition = {
            type: 0,
        };

        if (creator){
            searchCondition.creator = {
                $regex: creator
            }
        }
        const count = await words.countDocuments(searchCondition);
        const result = await words.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async addClassMateWord (req) {
        const { wordsTitle, wordsContent } = req.body;
        const words = mongoose.model('Words');
        const creator = req.session.payload.userName;

        await words.create({
            wordsTitle,
            wordsContent,
            creator,
        });

        return true;
    }

    static async updateClassMateWord (req) {
        const { wordsTitle, wordsContent, _id } = req.body;
        const words = mongoose.model('Words');

        await words.updateOne({
            _id
        }, {
            wordsTitle,
            wordsContent,
        });

        return true;
    }

    static async deleteClassMateWord (req) {
        const { _id } = req.body;
        const words = mongoose.model('Words');

        await words.remove({
            _id
        });

        return true;
    }

    /**
     * 个人留言区域
     * @returns {Promise<{total: *, data: *}>}
     */
    static async getPersonalWord (req) {
        const { curPage, pageSize, creator } = req.body;
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const words = mongoose.model('Words');

        const searchCondition = {
            type: 1,
        };

        if (creator){
            searchCondition.creator = {
                $regex: creator
            }
        }

        const count = await words.countDocuments(searchCondition);
        const result = await words.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async addPersonalWord (req) {
        const { wordsTitle, wordsContent } = req.body;
        const words = mongoose.model('Words');
        const creator = req.session.payload.userName;
        await words.create({
            wordsTitle,
            wordsContent,
            creator,
            type: '1'
        });

        return true;
    }

    static async updatePersonalWord (req) {
        const { wordsTitle, wordsContent, _id } = req.body;
        const words = mongoose.model('Words');

        await words.updateOne({
            _id
        }, {
            wordsTitle,
            wordsContent,
        });

        return true;
    }

    static async deletePersonalWord (req) {
        const { _id } = req.body;
        const words = mongoose.model('Words');

        await words.remove({
            _id
        });

        return true;
    }

    /**
     * 通讯录管理区域
     * @returns {Promise<{total: *, data: *}>}
     */
    static async getPhoneInfo (req) {
        const { curPage, pageSize, creator } = req.body;
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const phone = mongoose.model('Phone');
        const searchCondition = {};

        if (creator){
            searchCondition.creator = {
                $regex: creator
            }
        }
        const count = await phone.countDocuments(searchCondition);
        const result = await phone.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async addPhoneInfo (req) {
        const { qq, phone, wechat, mobile } = req.body;
        const words = mongoose.model('Phone');
        const creator = req.session.payload.userName;
        await words.create({
            qq,
            phone,
            wechat,
            mobile,
            creator,
        });

        return true;
    }

    static async updatePhoneInfo (req) {
        const { mobile, wechat, _id, qq  } = req.body;
        const phone = mongoose.model('Phone');

        await phone.updateOne({
            _id
        }, {
            mobile,
            wechat,
            qq,
        });

        return true;
    }

    static async deletePhoneInfo (req) {
        const { _id } = req.body;
        const phone = mongoose.model('Phone');

        await phone.remove({
            _id
        });

        return true;
    }

    /**
     * 信息管理区域
     * @returns {Promise<{total: *, data: *}>}
     */
    static async getMessage (req) {
        const { curPage, pageSize, username, } = req.body;
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const user = mongoose.model('User');
        const searchCondition = {};

        if (username){
            searchCondition.userName = {
                $regex: username
            }
        }

        const count = await user.countDocuments(searchCondition);
        const result = await user.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async updateMessage (req) {
        const { userName, passWord, _id, eMail, mobile, age, sex, address } = req.body;
        const user = mongoose.model('User');

       await user.updateOne({
            _id
        }, {
            userName,
            passWord,
            mobile,
            eMail,
            age,
            sex,
            address,
        });

       const result = await user.findOne({
           _id
       });

        return result;
    }

    static async deleteMessage (req) {
        const { _id } = req.body;
        const user = mongoose.model('User');

        await user.remove({
            _id
        });

        return true;
    }

    /**
     * 相册管理区域
     * @param req
     * @returns {Promise<{total: *, data: *}>}
     */
    static async getCategoryList (req) {
        const { curPage, pageSize, categoryName, } = req.body;
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const category = mongoose.model('Category');
        const searchCondition = {};

        if (categoryName){
            searchCondition.categoryName = {
                $regex: categoryName
            }
        }

        const count = await category.countDocuments(searchCondition);
        const result = await category.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async addCategory (req) {
        const { categoryName, categoryInfo,} = req.body;
        const category = mongoose.model('Category');
        await category.create({
            categoryName,
            categoryInfo
        });

        return true;
    }

    static async deleteCategory (req) {
        const { _id } = req.body;
        const category = mongoose.model('Category');
        const picture =  mongoose.model('Picture');

        await picture.remove({
            categoryId: _id
        });

        await category.remove({
            _id
        });

        return true;
    }

    /**
     * 照片管理区域
     * @param req
     * @returns {Promise<{total: *, data: *}>}
     */
    static async getPictureList (req) {
        const { curPage, pageSize, pictureName, categoryId } = req.body;
        const offset = (curPage - 1)*pageSize; // 偏移量计算
        const category = mongoose.model('Picture');
        const searchCondition = { categoryId };

        if (pictureName){
            searchCondition.pictureName = {
                $regex: pictureName,
            }
        }

        const count = await category.countDocuments(searchCondition);
        const result = await category.find(searchCondition).skip(offset).limit(Number(pageSize));

        return {data: result, total: count};
    }

    static async addPicture (req) {
        const { pictureName, pictureInfo, pictureUrl, categoryId } = req.body;
        const category = mongoose.model('Picture');
        console.log()
        const creator = req.session.payload.userName;
        await category.create({
            pictureName,
            pictureInfo,
            pictureUrl,
            categoryId,
            creator
        });

        return true;
    }

    static async deletePicture (req) {
        const { _id } = req.body;
        const picture =  mongoose.model('Picture');

        await picture.remove({
            _id
        });

        return true;
    }



}

module.exports = MainService;
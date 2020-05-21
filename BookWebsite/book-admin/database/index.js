/**
 * 初始化数据库主配置
 * @type {glob}
 */
const glob = require('glob');
const { resolve } = require('path');
const { db } = require('./db');
const { encryptPw } = require('../untils/pw');
const Sequelize = require('sequelize');
const bookCategoryArr = [
    { categoryName: '文学类'},
    { categoryName: '理综类'},
    { categoryName: '宗教类'},
    { categoryName: '心理类'},
    { categoryName: '生活类'},
    { categoryName: '艺术类'},
    { categoryName: '军事类'},
    { categoryName: '体育类'},
    { categoryName: '哲学类'},
    { categoryName: '计算机类'},
];
const announceCategoryArr = [
    { categoryName: '重要通知'},
    { categoryName: '注意事项'},
    { categoryName: '图书推荐'},];
/**
 * 定义model执行函数
 */
const modelInit = (name) => {
    return  require(`./model/${name}`)(db, Sequelize);
};
/**
 * 引入定义表
 * @type {function(*, *): *}
 */
const user = modelInit('user');
const announce = modelInit('announce');
const announceCategory = modelInit('announceCategory');
const book = modelInit('book');
const bookCategory = modelInit('bookCategory');
const words = modelInit('words');
const message = modelInit('message');
const record = modelInit('record');
const comment = modelInit('comment');
/**
 * 外键关联
 */
(async () => {
    user.hasMany(words, { foreignKey: 'userId'});
    user.hasMany(book, { foreignKey: 'userId'});
    user.hasMany(message, { foreignKey: 'userId'});
    words.belongsTo(user,{ foreignKey: 'userId', targetKey: 'id'});
    book.belongsTo(user,{ foreignKey: 'userId', targetKey: 'id'});
    book.hasMany(message, { foreignKey: 'bookId'});
    message.belongsTo(user,{ foreignKey: 'userId', targetKey: 'id'});
    message.belongsTo(book,{ foreignKey: 'bookId', targetKey: 'id'});


    announceCategory.hasMany(announce, { foreignKey: 'categoryId'});
    announce.belongsTo(announceCategory,{ foreignKey: 'categoryId', targetKey: 'id'});

    bookCategory.hasMany(book, { foreignKey: 'categoryId'});
    book.belongsTo(bookCategory,{ foreignKey: 'categoryId', targetKey: 'id'});

})();

exports.initSchema = async () => {
    glob.sync(resolve(__dirname,'./model','**/*.js')).forEach(item => {
        require(item)(db, Sequelize).sync({ alter: true });
    });

    const password = await encryptPw(10, 'admin');
    /**
     * 初始化数据库数据操作
     */
    user.findOne({
        where: {
            username: 'admin',
            identity: '1',
        },
        raw: true,
    }).then( res => {
        if (res){
            console.log(`已存在超级管理员,账号:${res.username}, 密码: admin`);
        } else {
            user.create({
                username: 'admin',
                password,
                identity: '1',
                age: 16,
                sex: '0',
                email: '425160813@qq.com'
            }).then( data => {
                console.log(`已创建超级管理员,账号:${data.username}, 密码: admin`);
            });
        }
    });

    const category_result = await bookCategory.findOne({
        where: {}
    });

    if (category_result) {
        return true;
    }

    await bookCategory.bulkCreate(bookCategoryArr);

    const announce_result = await announceCategory.findOne({
        where: {}
    });

    if (announce_result) {
        return true;
    }

    await announceCategory.bulkCreate(announceCategoryArr);
};

exports.models = {
    user,
    book,
    announce,
    comment,
    bookCategory,
    announceCategory,
    message,
    record,
    Words: words,
};


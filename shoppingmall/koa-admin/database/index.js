/**
 * 初始化数据库主配置
 * @type {glob}
 */
const glob = require('glob');
const { resolve } = require('path');
const { db } = require('./db');
const Sequelize = require('sequelize');
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
const code = modelInit('code');
const cart = modelInit('cart');
const category = modelInit('category');
const goods = modelInit('goods');
const middle = modelInit('middle');
const order = modelInit('order');
const comment = modelInit('comment');
/**
 * 定义初始化数据
 */
const categoryArr = [{
   categoryName: '广州'
}, {
    categoryName: '重庆'
}, {
    categoryName: '成都'
}, {
    categoryName: '上海'
}, {
    categoryName: '北京'
}, {
    categoryName: '武汉'
}];

const goodsArr1 = [{
    categoryId: 1,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/29338cb736f164a05722fc8314e5ac17143046.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 1,
    goodsName: '哈西站僧僧公寓格调大床房',
    goodsInfo: '整套可住1人 | 哈西万达',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 1,
    goodsName: '长财建工旁 欧亚 简约日租房',
    goodsInfo: '整套可住2人 | 简约万达',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 1,
    goodsName: '火车站/万达旁 暖心大床房',
    goodsInfo: '整套可住2人 | 暖心大床房',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 1,
    goodsName: '入户独立卫浴密码锁温馨民宿',
    goodsInfo: '整套可住1人 | 温馨民宿',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 1,
    goodsName: '蓝色系复式loft大床房',
    goodsInfo: '整套可住2人 | loft大床房',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 1,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 80,
}];

const goodsArr2 = [{
    categoryId: 2,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/8db20b31b2fb94d216d38a6665586797175287.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 2,
    goodsName: '哈西站僧僧公寓格调大床房',
    goodsInfo: '整套可住1人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/1aa0b6b6061b76926126a720566acc3c2220788.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 2,
    goodsName: '长财建工旁 欧亚 简约日租房',
    goodsInfo: '整套可住2人 | 简约万达',
    goodsPic: 'https://img.meituan.net/phoenix/78c44143e74a0db7e66274494a19ca65463362.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 2,
    goodsName: '火车站/万达旁 暖心大床房',
    goodsInfo: '整套可住2人 | 暖心大床房',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 2,
    goodsName: '入户独立卫浴密码锁温馨民宿',
    goodsInfo: '整套可住1人 | 温馨民宿',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 2,
    goodsName: '蓝色系复式loft大床房',
    goodsInfo: '整套可住2人 | loft大床房',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 2,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 80,
}];

const goodsArr3 = [{
    categoryId: 3,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/29338cb736f164a05722fc8314e5ac17143046.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 3,
    goodsName: '哈西站僧僧公寓格调大床房',
    goodsInfo: '整套可住1人 | 哈西万达',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 3,
    goodsName: '长财建工旁 欧亚 简约日租房',
    goodsInfo: '整套可住2人 | 简约万达',
    goodsPic: 'https://img.meituan.net/phoenix/78c44143e74a0db7e66274494a19ca65463362.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 3,
    goodsName: '火车站/万达旁 暖心大床房',
    goodsInfo: '整套可住2人 | 暖心大床房',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 3,
    goodsName: '入户独立卫浴密码锁温馨民宿',
    goodsInfo: '整套可住1人 | 温馨民宿',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 3,
    goodsName: '蓝色系复式loft大床房',
    goodsInfo: '整套可住2人 | loft大床房',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 3,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/78c44143e74a0db7e66274494a19ca65463362.jpg@740w_416h_1e_1c',
    goodsPrice: 80,
}];

const goodsArr4 = [{
    categoryId: 4,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/78c44143e74a0db7e66274494a19ca65463362.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 4,
    goodsName: '哈西站僧僧公寓格调大床房',
    goodsInfo: '整套可住1人 | 哈西万达',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 4,
    goodsName: '长财建工旁 欧亚 简约日租房',
    goodsInfo: '整套可住2人 | 简约万达',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 4,
    goodsName: '火车站/万达旁 暖心大床房',
    goodsInfo: '整套可住2人 | 暖心大床房',
    goodsPic: 'https://img.meituan.net/phoenix/78c44143e74a0db7e66274494a19ca65463362.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 4,
    goodsName: '入户独立卫浴密码锁温馨民宿',
    goodsInfo: '整套可住1人 | 温馨民宿',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 4,
    goodsName: '蓝色系复式loft大床房',
    goodsInfo: '整套可住2人 | loft大床房',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 4,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 80,
}];

const goodsArr5 = [{
    categoryId: 5,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/29338cb736f164a05722fc8314e5ac17143046.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 5,
    goodsName: '哈西站僧僧公寓格调大床房',
    goodsInfo: '整套可住1人 | 哈西万达',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 5,
    goodsName: '长财建工旁 欧亚 简约日租房',
    goodsInfo: '整套可住2人 | 简约万达',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 5,
    goodsName: '火车站/万达旁 暖心大床房',
    goodsInfo: '整套可住2人 | 暖心大床房',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 5,
    goodsName: '入户独立卫浴密码锁温馨民宿',
    goodsInfo: '整套可住1人 | 温馨民宿',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 5,
    goodsName: '蓝色系复式loft大床房',
    goodsInfo: '整套可住2人 | loft大床房',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 5,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 80,
}];

const goodsArr6 = [{
    categoryId: 6,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/29338cb736f164a05722fc8314e5ac17143046.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 6,
    goodsName: '哈西站僧僧公寓格调大床房',
    goodsInfo: '整套可住1人 | 哈西万达',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 6,
    goodsName: '长财建工旁 欧亚 简约日租房',
    goodsInfo: '整套可住2人 | 简约万达',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 6,
    goodsName: '火车站/万达旁 暖心大床房',
    goodsInfo: '整套可住2人 | 暖心大床房',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 6,
    goodsName: '入户独立卫浴密码锁温馨民宿',
    goodsInfo: '整套可住1人 | 温馨民宿',
    goodsPic: 'http://p0.meituan.net/phoenix/c2fafd2594caaea37134de5e70c57ed1152178.jpg@740w_416h_1e_1c',
    goodsPrice: 99,
}, {
    categoryId: 6,
    goodsName: '蓝色系复式loft大床房',
    goodsInfo: '整套可住2人 | loft大床房',
    goodsPic: 'https://img.meituan.net/phoenix/92d6790fbe9416bbb4310ae216dd678b488709.jpg@740w_416h_1e_1c',
    goodsPrice: 78,
}, {
    categoryId: 6,
    goodsName: '哈西站华润凯旋门公寓格调大床房',
    goodsInfo: '整套可住2人 | 哈西万达',
    goodsPic: 'https://img.meituan.net/phoenix/200d8ab05196dd92326787354c6bf86c167549.jpg@740w_416h_1e_1c',
    goodsPrice: 80,
}];
/**
 * 外键关联
 */
(async () => {
    goods.belongsTo(category, { foreignKey: 'categoryId', targetKey: 'id'});
    category.hasMany(goods, { foreignKey: 'categoryId'});

    comment.belongsTo(goods, { foreignKey: 'goodsId', targetKey: 'id'});
    goods.hasMany(comment, { foreignKey: 'goodsId'});

    cart.belongsTo(goods, { foreignKey: 'goodsId', targetKey: 'id'});
    goods.hasMany(cart, { foreignKey: 'goodsId'});

    middle.belongsTo(goods, { foreignKey: 'goodsId', targetKey: 'id'});
    goods.hasMany(middle, { foreignKey: 'goodsId'});
})();

exports.initSchema = async () => {
    glob.sync(resolve(__dirname,'./model','**/*.js')).forEach(item => {
        require(item)(db, Sequelize).sync({ alter: true });
    });

    /**
     * 初始化数据库数据操作
     */
    const result_category = await category.findOne({
        raw: true,
    });

    if (result_category){
        return false;
    }
    /**
     * 创建数据
     */
    await category.bulkCreate(categoryArr);
    await goods.bulkCreate(goodsArr1);
    await goods.bulkCreate(goodsArr2);
    await goods.bulkCreate(goodsArr3);
    await goods.bulkCreate(goodsArr4);
    await goods.bulkCreate(goodsArr5);
    await goods.bulkCreate(goodsArr6);
};

exports.models = {
    user,
    code,
    cart,
    goods,
    order,
    middle,
    comment,
    category
};


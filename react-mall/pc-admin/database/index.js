/**
 * 初始化数据库主配置
 * @type {glob}
 */
const glob = require('glob');
const { resolve } = require('path');
const { db } = require('./db');
const Sequelize = require('sequelize');
const goodsArr = [
    {
        id: 1,
        goodsName: '品质男装',
        goodsInfo: '好礼释放',
        goodsPic: '//img10.360buyimg.com/cms/jfs/t1/79281/20/273/24653/5ce795eeEa78e251e/ee85371744d8cd1c.jpg!q95.webp',
        categoryId: 1,
        goodsPrice: 1200
    }, {
        id: 2,
        goodsName: '自营女装',
        goodsInfo: '低价销售',
        goodsPic: '//img12.360buyimg.com/cms/jfs/t1/4108/36/4081/13941/5b9b2ec0E9e6d0a18/5525af7f9b003d2d.jpg!q95.webp',
        categoryId: 1,
        goodsPrice: 1200
    }, {
        id: 3,
        goodsName: '自营内衣',
        goodsInfo: '精选推荐',
        goodsPic: '//img12.360buyimg.com/cms/jfs/t1/541/38/3505/29012/5b989a20Ec0278546/694bb5807e5b19fb.png!q95.webp',
        categoryId: 1,
        goodsPrice: 1200
    }, {
        id: 4,
        goodsName: '商务毛衫',
        goodsInfo: '丝滑享受',
        goodsPic: '//img12.360buyimg.com/cms/jfs/t3139/216/5567486074/4816/9a369e2d/58749ecdN1f3271e6.jpg!q95.webp',
        categoryId: 1,
        goodsPrice: 1200
    }, {
        id: 5,
        goodsName: '运动大牌',
        goodsInfo: '酷男必备',
        goodsPic: '//img12.360buyimg.com/cms/jfs/t3295/201/6098633358/15189/d1e95e97/5899da3dNa93deab5.jpg!q95.webp',
        categoryId: 1,
        goodsPrice: 1300
    }, {
        id: 6,
        goodsName: '自营女鞋',
        goodsInfo: '一飞冲天',
        goodsPic: '//img13.360buyimg.com/cms/jfs/t28864/303/61267282/15950/1cf8eff2/5be68cf7Ncd86d1a6.jpg!q95.webp',
        categoryId: 1,
        goodsPrice: 1300
    }, {
        id: 7,
        goodsName: '童装童鞋',
        goodsInfo: '一贝皇城',
        goodsPic: '//img10.360buyimg.com/cms/jfs/t19348/200/741907423/23561/68637ce0/5aa63446N2dc467c9.jpg!q95.webp',
        categoryId: 1,
        goodsPrice: 1300
    }
];
const categoryArr = [
    { categoryName: '品质男装'},
    { categoryName: '品质女装'},
    { categoryName: '童装童鞋'},];
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
const goods = modelInit('goods');
const category = modelInit('category');
const cart = modelInit('cart');
/**
 * 外键关联
 */
(async () => {
    goods.belongsTo(category, { foreignKey: 'categoryId', targetKey: 'id'});
    category.hasMany(goods, { foreignKey: 'categoryId'});

    cart.belongsTo(goods, { foreignKey: 'goodsId', targetKey: 'id'});
    goods.hasMany(cart, { foreignKey: 'goodsId'})
})();

exports.initSchema = async () => {
    glob.sync(resolve(__dirname,'./model','**/*.js')).forEach(item => {
        require(item)(db, Sequelize).sync({ alter: true });
    });

    /**
     * 初始化数据库数据操作
     */

    const result = await goods.findOne({
        raw: true,
    });

    if (result){
        return  true;
    }

    await goods.bulkCreate(goodsArr);
};

exports.models = {
    user,
    cart,
    goods,
    category
};


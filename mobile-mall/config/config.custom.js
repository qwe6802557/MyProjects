const path = require('path');
const homepage = require('./paths').servedPath;
module.exports = {
    //本地开发设置iconfont cdn 地址 注意每次ui修改iconfont后都会生成最新的cdn地址，记得及时替换。
    iconFontCDNUrl: ''/*'//at.alicdn.com/t/font_1599498_xokw1xi39wa.css'*/,
    //发布时iconfont位置
    proIconFontDirectory:path.join(homepage, '/iconfont'),
    //iconfont生成文件名
    iconfontFileName:'iconfont',
    //请求前缀
    fetchPrefix:'',
    //使用路由缓存，这种方案不能使用路由动画
    useKeepAlive:false
};


/*  useKeepAlive
    1.页面缓存实际上是对我们访问过地址对应的components在页面上进行了display:none和block进行切换。
    2.现在我们路由的切换对模块的作用从加载、卸载变成了显示隐藏，那么对组件的影响则是：再次显示的时候不在触发mount和unmount生命周期钩子。
    3.如果访问的路由包含通配符（如：xxx/yyy/:id）和查询参数（如：xxx/yyy?id=1）并且通配符和查询参数有所改变，其实对于当前页面是需要更新数据的。
    4.所以现在我们需要对该情况路由下受到通配符和查询参数影响的conponents进行改造，在该模块下通过componentWillReceiveProps进行处理数据的更新。
*/


/*
待新增功能：
1、分发es6版本前端资源
2、reduce index 自动生成
*/
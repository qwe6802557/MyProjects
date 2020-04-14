import ajax from './ajax'
import Memory from '@/untils/memoryUntil'
/**
 * 客户端请求
 * @returns {Promise<unknown>}
 */
//初始化页面请求
export const reqCustomerInfo = () => ajax('/houduan/public/index.php/index/qiantai.Index/index', {}, "GET");
//查询请求
export const reqSearchInfo = searchObj => ajax('/houduan/public/index.php/index/qiantai.Index/jieshou_chaxun', searchObj, "POST");
//热门套餐点击查询
export const hotClickSearch = content => ajax('/houduan/public/index.php/index/qiantai.Index/get_hotHero', content, 'POST');
/**
 * 管理端请求
 * @returns {Promise | Promise<unknown>}
 */
//登录请求
export const reqLogin = userInfo => ajax('/houduan/public/index.php/index/houtai.Index/login', userInfo, 'POST');
//添加页面初始化
export const addPageInit = () => ajax('/houduan/public/index.php/index/houtai.Index/get_hero', {}, 'GET', Memory.token);
//添加信息请求
export const addInfo = formData => ajax('/houduan/public/index.php/index/houtai.Index/add_hero', formData, 'POST', Memory.token);
//获取用户信息
export const getUserInfo = login => ajax('/houduan/public/index.php/index/houtai.Index/get_user', {}, 'GET', Memory.token, login);
//列表出售信息获取
export const getSoldCount = (pageInfo) => ajax('/houduan/public/index.php/index/houtai.Index/fenye', pageInfo, 'GET', Memory.token);
//查询与分页
export const getListAndSearch = formData => ajax('/houduan/public/index.php/index/houtai.Index/chaxun', formData, 'POST', Memory.token);
//删除和批量删除
export const deleteGoods = user => ajax('/houduan/public/index.php/index/houtai.Index/delete_Card', user, 'POST', Memory.token);
//售出
export const toSellGoods = user => ajax('/houduan/public/index.php/index/houtai.Index/selled', user, 'POST', Memory.token);
//修改操作
export const editHero = editData => ajax('/houduan/public/index.php/index/houtai.Index/revise', editData, 'POST', Memory.token);
//倒序
export const orderDesc = () => ajax('/houduan/public/index.php/index/houtai.Index/daoxu_server', {}, 'GET', Memory.token);
//添加英雄
export const addHero = hero => ajax('/houduan/public/index.php/index/houtai.Index/newHero', hero, 'POST', Memory.token);
//添加服务器
export const addServer = server => ajax('/houduan/public/index.php/index/houtai.Index/addServer', server, 'POST', Memory.token);
//添加套餐
export const addHot = hotObj => ajax('/houduan/public/index.php/index/houtai.Index/add_hotTaocan', hotObj, 'POST', Memory.token);
//删除及批量删除套餐
export const delHot = hotIdStr => ajax('/houduan/public/index.php/index/houtai.Index/delete_hotTaocan', hotIdStr, 'POST', Memory.token);
//一键删除
export const deleteAll = () => ajax('/houduan/public/index.php/index/houtai.Index/delete_both', {}, 'POST', Memory.token);

/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import ajax from './ajax'

// 注册接口
export const reqRegister = (user) => ajax('/register', user, 'POST')
// 登陆接口
export const reqLogin = ({username, password}) => ajax('/login',{username, password}, 'POST')
// 更新用户接口
export const reqUpdateUser = (user) => ajax('/update', user, 'POST')
// 获取用户信息
export const reqUser = () => ajax('/user')

// 获取用户列表
export const reqUserList = (type) => ajax('/userlist', {type})

// 获取当前用户的聊天消息列表
export const reqChatMsgList = () => ajax('/msglist')

// 修改指定消息为已读
export const reqReadMsg = (from) => ajax('/readmsg', {from}, 'POST')
/**
 * 管理员权限管理
 * @param type
 * @returns {AxiosPromise<any>}
 */
//查询大神列表丶老板列表丶招聘信息列表
export const reqAuthorityList = type => ajax('/admin/getAuthorityList', { type }, 'GET');
//老板和大神通用删除方法
export const reqDeleteSingle = _id => ajax('/admin/deleteSingle', { _id }, 'POST');
//招聘信息删除方法
export const reqDeleteHire = _id => ajax('/admin/deleteHire', { _id }, 'POST');
//通用搜索方法
export const reqSearchAll = searchObj => ajax('/admin/searchInfo', searchObj, 'GET');
//通用新增方法
export const reqAddInfo = userInfo => ajax('/admin/addInfo', userInfo, 'POST');
//编辑获取信息
export const reqGetEdit = _id => ajax('/admin/getEdit', { _id }, 'GET');
//编辑保存信息
export const reqPostEdit = formInfo => ajax('/admin/postEdit',  formInfo, 'POST');
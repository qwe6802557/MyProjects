import ajax from '../ajax'
/**
 * 管理端请求 --登录
 * @returns {Promise | Promise<unknown>}
 */
export const reqLogin = userInfo => ajax('/adminLogin/toLogin', userInfo, 'POST')

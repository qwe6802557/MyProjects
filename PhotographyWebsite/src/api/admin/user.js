import ajax from '../ajax'
/**
 * 管理端请求 --用户管理
 * @returns {Promise | Promise<unknown>}
 */
// 用户列表
export const reqUserList = pagination => ajax('', pagination, 'POST')
export const reqUserAdd = userInfo => ajax('', userInfo, 'POST')
export const reqUserEditGet = id => ajax('', id, 'GET')
export const reqUserEditPOST = userInfo => ajax('', userInfo, 'POST')
export const reqUserDelete = id => ajax('', id, 'GET')
// 用户评论
export const reqCommentList = pagination => ajax('', pagination, 'POST')
export const reqCommentAdd = commentInfo => ajax('', commentInfo, 'POST')
export const reqCommentEditGet = id => ajax('', id, 'GET')
export const reqCommentEditPOST = commentInfo => ajax('', commentInfo, 'POST')
export const reqCommentDelete = id => ajax('', id, 'GET')
// 用户评分
export const reqScoreList = pagination => ajax('', pagination, 'POST')
export const reqScoreClear = id => ajax('', id, 'GET')

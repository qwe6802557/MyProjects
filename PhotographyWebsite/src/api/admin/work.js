import ajax from '../ajax'
/**
 * 管理端请求 --作品管理
 * @returns {Promise | Promise<unknown>}
 */
// 作品分类
export const reqWorkTypeList = pagination => ajax('', pagination, 'POST')
export const reqWorkTypeAdd = workTypeInfo => ajax('', workTypeInfo, 'POST')
export const reqWorkTypeEditGet = id => ajax('', id, 'GET')
export const reqWorkTypeEditPOST = workTypeInfo => ajax('', workTypeInfo, 'POST')
export const reqWorkTypeDelete = id => ajax('', id, 'GET')
// 作品列表
export const reqWorkList = pagination => ajax('', pagination, 'POST')
export const reqWorkAdd = WorkInfo => ajax('', WorkInfo, 'POST')
export const reqWorkEditGet = id => ajax('', id, 'GET')
export const reqWorkEditPOST = WorkInfo => ajax('', WorkInfo, 'POST')
export const reqWorkDelete = id => ajax('', id, 'GET')

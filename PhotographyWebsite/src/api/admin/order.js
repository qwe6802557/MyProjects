import ajax from '../ajax'
/**
 * 管理端请求 --订单管理
 * @returns {Promise | Promise<unknown>}
 */
// 作品订单
export const reqOrderList = pagination => ajax('', pagination, 'POST')
export const reqOrderAdd = OrderInfo => ajax('', OrderInfo, 'POST')
export const reqOrderEditGet = id => ajax('', id, 'GET')
export const reqOrderEditPOST = OrderInfo => ajax('', OrderInfo, 'POST')
export const reqOrderDelete = id => ajax('', id, 'GET')
//  约拍订单
export const reqBeatList = pagination => ajax('', pagination, 'POST')
export const reqBeatAdd = BeatInfo => ajax('', BeatInfo, 'POST')
export const reqBeatEditGet = id => ajax('', id, 'GET')
export const reqBeatEditPOST = BeatInfo => ajax('', BeatInfo, 'POST')
export const reqBeatDelete = id => ajax('', id, 'GET')

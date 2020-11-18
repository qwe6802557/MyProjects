import ajax from "./index";

// 获取用户信息
export const reqUserInfo = () => ajax('/api/v1/profile/getUserProfile', {}, 'POST');
// 保存用户信息
export const reqSaveUserInfo = data => ajax('/api/v1/profile/saveUserProfile', data, 'POST');
// 查询用户提现明细
export const reqWithdrawDetail = () => ajax('/api/v1/finance/getCashItemList', {}, 'POST');
// 保存供货商供应信息
export const reqSaveSupplier = data => ajax('/api/v1/apply/saveSupplierApply', data, 'POST');
// 保存合伙人信息
export const reqSavePartner = data => ajax('/api/v1/apply/savePartnerApply', data, 'POST');
// 提现申请
export const reqCashInfo = data => ajax('/api/v1/finance/cashApply', {}, 'POST');
// 获取提现信息
export const reqWithDraw = () => ajax('/api/v1/member/getCashInfo', {}, 'POST');
// 获取会员收益信息
export const reqMemberMoneyInfo = () => ajax('/api/v1/member/getMemberMoneyInfo', {}, 'POST');
// 根据日期类型条件查询日期范围类总收益
export const reqMemberMoneyCount = () => ajax('/api/v1/member/getMemberMoneyInfo', {}, 'POST');
// 查询收益明细详情
export const reqMemberMoneyDetail = () => ajax('/api/v1/member/getMemberMoneyItem', {}, 'POST');
import ajax from '../index';
//获取好友列表
export const reqFriendList = () => ajax('/api/contact/friendList', {}, 'GET');
//删除好友
export const reqDeleteFriend = _id => ajax('/api/contact/deleteFriend', _id, 'POST');
import ajax from '../index';
// get friend list
export const reqFriendList = id => ajax('/api/contact/friendList', id, 'GET');
// get user list
export const reqUserList = () => ajax('/api/contact/userList', {}, 'GET');
// remove friend
export const reqDeleteFriend = _id => ajax('/api/contact/deleteFriend', _id, 'POST');
// get notification
export const reqNotification = user_id => ajax('/api/contact/notification', user_id, 'GET');
// get group list
export const reqGroupList = user_id => ajax('/api/contact/group', user_id, 'GET');
// remove group 
export const reqDeleteGroup = _id => ajax('/api/contact/deleteGroup', _id, 'POST');
// add group
export const reqAddGroup = group => ajax('/api/contact/addGroup', group, 'POST');
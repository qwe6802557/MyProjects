const IO = require('socket.io').listen(8000, {log:false});
const message  = require('../models/Message');
const Socket = require('../models/Socket');
const user = require('../models/User');
const friend = require('../models/Friends');
const notification = require('../models/Notification');
const room = require('../models/Room');
/**
 * socket connection and event binding
 */
IO.sockets.on('connection',function (socket){
    const user_id = socket.handshake.query.user_id;
    Socket.findOne({
        user_id
    }).then( res => {
        if (res){
            Socket.update(res, {
                socket_id: socket.id
            }).then( res => {
                socket.emit('connection', 'Succeed!')
            })
        } else {
            Socket.create({
                user_id,
                socket_id: socket.id
            }).then(res => {
                socket.emit('connection', 'Succeed!')
            })
        }
    });
    // send the message
    socket.on('msg',function(data){
        console.log(data.friend_id);
        message.create(data).then( res => {
            socket.emit('msg', { code: 0, message: 'Message sent!', messageBody: res});
        }).catch(e => {
            socket.emit('msg', { code: 5, message: 'Failure!', messageBody: null});
            throw e;
        });
    });
    // send messages in a group
    socket.on('msgGroup', async data => {
        try {
            const friends_socket = [];
            await message.create(data);
            const result = await room.findOne({
                _id: data.friend_id
            });
            for(const item of result.roomMember ){
                const result_socket = await Socket.findOne({
                    user_id: item._id
                });
                !!result_socket && friends_socket.push(result_socket.socket_id);
            }
            console.log(friends_socket);
            for(const item of friends_socket){
                await IO.to(item).emit('msgGroup', { code: 0, message: 'message received!', messageBody: null })
            }
            socket.emit('msgGroup', { code: 0, message: 'message sent!', messageBody: null })
        }catch (e) {
            socket.emit('msgGroup', { code: 5, message: 'failure!', messageBody: null })
        }
    });
    // get message from friend
    socket.on('getMessageContent',function(data){
        const { user_id, friend_id } = data;
        message.find({
            $and: [{
                $or: [{
                    user_id: user_id
                }, {
                    user_id: friend_id
                }]
            },{
            $or: [{
                friend_id: user_id
            }, {
                friend_id: friend_id
            }]
        }]
        }).then( res => {
            user.findOne({
                _id: friend_id
            }).then( data => {
                const newRes = JSON.parse(JSON.stringify(res));
                if (data){
                    newRes.forEach( item => {
                        Object.defineProperty(item, 'friend_avatar', {
                            value: data.avatar,
                            writable: true,
                            enumerable: true
                        });
                        Object.defineProperty(item, 'friend_name', {
                            value: data.name,
                            writable: true,
                            enumerable: true
                        });
                    })
                }
                socket.emit('getMessageContent', { code: 0, message: 'Message loaded!', messageBody: newRes});
                Socket.findOne({
                    user_id: friend_id
                }).then( data => {
                    if (data){
                        IO.to(data.socket_id).emit('getMessageContent', { code: 0, message: 'Message loaded!', messageBody: res})
                    }
                })
            });
        }).catch(e => {
            socket.emit('getMessageContent', { code: 5, message: 'Failure!', messageBody: null});
            throw e;
        });
    });
    // get the messages in a group
    socket.on('getGroupMessage', async data => {
       try {
           const result  = await message.find({
               friend_id: data.friend_id
           });
           const newRes = JSON.parse(JSON.stringify(result));
           for(const item of newRes){
               if (item.user_id !== data.user_id){
                   const result_user = await user.findOne({
                       _id: user_id
                   });
                   Object.defineProperty(item, 'friend_avatar', {
                       value: result_user.avatar,
                       writable: true,
                       enumerable: true
                   });
                   Object.defineProperty(item, 'friend_name', {
                       value: result_user.name,
                       writable: true,
                       enumerable: true
                   });
               }
           }
           socket.emit('getGroupMessage', { code: 0, message: 'Message loaded!', messageBody: newRes})
       }catch (e) {
           socket.emit('getGroupMessage', { code: 5, message: 'Failure!', messageBody: null});
           throw e;
       }
    });
    // add friend
    socket.on('addFriends', async (data) => {
        try {
            const users_id_socket = [];
            data.forEach( item => {
                users_id_socket.push(item.friend_id);
            });
            for (const item of data) {
                await notification.updateOne(item, item, { upsert: true }) 
                const result = await Socket.findOne({
                    user_id: item.friend_id
                });
                if (result){
                    IO.to(result.socket_id).emit('addFriendsMessage', { code: 0, message: 'A friend request received!', messageBody: null });
                }
            }
            socket.emit('addFriends', { code: 0, message: 'Friend request has been sent！', messageBody: null });
        }catch (e) {
            socket.emit('addFriends', { code: 5, message: 'Failure to add friend', messageBody: null });
            throw e;
        }
    });
    // accept frined request
    socket.on('agreeAdd', async data => {
        try {
            const result = await user.findOne({
                _id: data.friend_id
            });
            data.content = result.name + ' has accepted your friend request!';
            await notification.updateOne({
                _id: data._id
            }, data);
            await friend.create({
                user_id: data.user_id,
                friend_id: data.friend_id
            });
            await friend.create({
                user_id: data.friend_id,
                friend_id: data.user_id
            });
            const result_socket =await Socket.findOne({
                user_id: data.user_id
            });
            !!result_socket && IO.to(result_socket.socket_id).emit('addFriendsMessage', { code: 0, message: 'Succeed!', messageBody: null });
            socket.emit('agreeAdd', { code: 0, message: 'Succeed!', messageBody: null })
        }catch (e) {
            socket.emit('agreeAdd', { code: 5, message: 'Failure!', messageBody: null })
        }
    });
    // decline friend request
    socket.on('rejectAdd', async data => {
        try {
            const result = await user.findOne({
                _id: data.friend_id
            });
            data.content = result.name + ' has declined your friend request';
            await notification.updateOne({
                _id: data._id
            }, data);
            const result_socket =await Socket.findOne({
                user_id: data.user_id
            });
            !!result_socket && IO.to(result_socket.socket_id).emit('addFriendsMessage', { code: 0, message: 'Succeed!', messageBody: null });
            socket.emit('rejectAdd', { code: 0, message: 'Succeed!', messageBody: null })
        }catch (e) {
            socket.emit('rejectAdd', { code: 5, message: 'Failure!', messageBody: null })
        }
    });
    // Confirm the request
    socket.on('confirmAdd', async data => {
        try {
            await notification.remove({
                _id: data._id
            });
            socket.emit('confirmAdd', { code: 0, message: 'Succeed!', messageBody: null })
        }catch (e) {
            socket.emit('confirmAdd', { code: 5, message: 'Failure!', messageBody: null })
        }
    });
});
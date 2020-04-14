const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const notification = require('../../models/Notification');
const friend = require('../../models/Friends');
const room = require('../../models/Room');

router.get('/userList', async (req, res) => {
    try {
        const result = await User.find();-
        res.send({ code: 0, message: 'Get user list successfully!', messageBody: result});
    }catch (e) {
        res.send({ code: 5, message: 'Failure to get user list!', messageBody: null});
    }
});

router.get('/friendList', async (req, res) => {
    try {
        const result = JSON.parse(JSON.stringify(await friend.find({
            user_id: req.query.user_id
        })));
        for(const item of result){
            const friendInfo = await User.findOne({
                _id: item.friend_id
            });
            item.friend_info = friendInfo
        }
        res.send({ code: 0, message: 'Get friend list successfully!', messageBody: result});
    }catch (e) {
        res.send({ code: 5, message: 'Failure to get friend list!', messageBody: null});
    }
});

router.post('/deleteFriend', async (req, res) =>{
    try {
        const { user_id, friend_id } = req.body;
        await friend.remove({
            $or: [{
                user_id: user_id,
                friend_id: friend_id
            }, {
                user_id: friend_id,
                friend_id: user_id
            }]
        });
        res.send({ code: 0, message: 'Friend removed!', messageBody: null});
    }catch (e) {
        res.send({ code: 5, message: 'Failure to remove the friend!', messageBody: null});
        throw e;
    }
});

router.get('/notification', async (req, res) =>{
    try {
        const { user_id } = req.query;
       const result = await notification.find({
            $or: [{
                user_id
            }, {
                friend_id: user_id
            }]
        });
           let filterResult = JSON.parse(JSON.stringify(result));
           filterResult = filterResult.filter( item => {
               return (item.user_id === user_id && item.isAllowed !== 0) || (item.user_id !== user_id)
           });
        res.send({ code: 0, message: 'Notification loaded!', messageBody: filterResult});
    }catch (e) {
        res.send({ code: 5, message: 'Failure to load notification!', messageBody: null});
    }
});

router.get('/group', async (req, res) => {
    try {
        const result = await room.find();
        const finalResult = [];
        for( const item of result ){
         const userInfo = item.roomMember.filter( item => item._id === req.query.user_id)[0];
         if (userInfo){
             finalResult.push(item);
         } else {
             item.roomLeader === req.query.user_id? finalResult.push(item) : ''
         }
        }
        res.send({ code: 0, message: 'Group list loaded!', messageBody: finalResult});
    }catch (e) {
        res.send({ code: 5, message: 'Failure to load the group list!', messageBody: null});
    }
});

router.post('/deleteGroup', async (req, res) => {
    try {
        const result = await room.remove({
            _id: req.body._id
        });
        res.send({ code: 0, message: 'Group removed!', messageBody: null });
    }catch (e) {
        res.send({ code: 5, message: 'Failure to remove the group!', messageBody: null});
    }
});

router.post('/addGroup', async (req, res) => {
    try {
        const result = await room.create({
            ...req.body
        });
        res.send({ code: 0, message: 'Group created!', messageBody: result});
    }catch (e) {
        res.send({ code: 5, message: 'Failure to create the group!', messageBody: null});
    }
});

module.exports = router;
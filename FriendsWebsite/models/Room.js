const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    roomId:  Schema.Types.ObjectId,
    roomLeader: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    roomName: String,
    roomMember: Array,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Room = mongoose.model('room', RoomSchema);
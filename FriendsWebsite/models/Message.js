const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    friend_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    content: String,
    date: {
        type: Number,
        default: Date.now
    }
});

module.exports = Message = mongoose.model('message', MessagesSchema);
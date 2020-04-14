const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    friend_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    content: String,
    type: {
      type: Number,
      enum: [0, 1],   // 0 Unread， 1 friend messsage
      default: 0
    },
    isAllowed: {
      type: Number,
      enum: [0, 1, 2], //  0 default  1 accept  2 decline
      default: 0
    },
    date: {
        type: Number,
        default: Date.now
    }
});

module.exports = notification = mongoose.model('notification', NotificationSchema);
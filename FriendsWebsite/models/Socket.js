const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocketSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    socket_id: String,
    date: {
        type: Number,
        default: Date.now
    }
});

module.exports = Socket = mongoose.model('socket', SocketSchema);
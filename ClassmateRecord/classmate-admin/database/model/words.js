const mongoose = require('mongoose');
const schema = mongoose.Schema;
const wordsSchema = new schema({
    wordsTitle: String,
    wordsContent: String,
    creator: String,
    type: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    createAt:{
        type: Date,
        default: Date.now
    },
});
mongoose.model('Words',wordsSchema); //发布留言表

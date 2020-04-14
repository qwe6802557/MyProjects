const mongoose = require('mongoose');
const schema = mongoose.Schema;
let objectID = schema.Types.ObjectID;
const messageSchema = new schema({
    newsId:objectID,
    title: String,
    content: String,
    imgSrc: String,
    type: {
        type: Number,
        enum: [0, 1, 2],
        default: 0
    },
    detail:String,
    createTime:{
        type: String,
        default: Date.now
    },
    goodNum: Number,
    collectionNum: Number,
    avatar: String,
    isGood:{
        type: Number,
        enum: [0 , 1],
        default: 0
    },
    isCollection:{
        type: Number,
        enum: [0 , 1],
        default: 0
    }
});
mongoose.model('MessageCenter', messageSchema); //发布Banner表

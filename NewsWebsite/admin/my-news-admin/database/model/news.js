const mongoose = require('mongoose');
const schema = mongoose.Schema;
let objectID = schema.Types.ObjectID;
const newsSchema = new schema({
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
    isHot: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
});
mongoose.model('News', newsSchema); //发布Banner表

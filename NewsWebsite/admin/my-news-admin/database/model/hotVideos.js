const mongoose = require('mongoose');
const schema = mongoose.Schema;
let objectID = schema.Types.ObjectID;
const videosSchema = new schema({
    videoId:objectID,
    title: String,
    content: String,
    detail:String,
    pic: String,
    createTime:{
        type: String,
        default: Date.now
    }
});
mongoose.model('Videos', videosSchema); //发布Video表

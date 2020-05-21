const mongoose = require('mongoose');
const schema = mongoose.Schema;
const pictureSchema = new schema({
    categoryId:{
        type: String
    },
    pictureInfo: String,
    pictureName: String,
    creator: String,
    pictureUrl: String,
    createAt:{
        type: Date,
        default: Date.now
    },
});
mongoose.model('Picture',pictureSchema); //发布图片表

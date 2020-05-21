const mongoose = require('mongoose');
const schema = mongoose.Schema;
const categorySchema = new schema({
    categoryName:{
        unique: true,  //表示不重复
        type: String
    },
    categoryInfo: String,
    createAt:{
        type: Date,
        default: Date.now
    },
});
mongoose.model('Category',categorySchema); //发布用户表

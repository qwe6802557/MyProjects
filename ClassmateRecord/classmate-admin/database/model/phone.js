const mongoose = require('mongoose');
const schema = mongoose.Schema;
const phoneSchema = new schema({
    mobile: String,
    qq: String,
    wechat: String,
    creator: String,
    createAt:{
        type: Date,
        default: Date.now
    },
});
mongoose.model('Phone',phoneSchema); //发布通讯录表

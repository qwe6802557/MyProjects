const mongoose = require('mongoose');
const schema = mongoose.Schema;
let objectID = schema.Types.ObjectID;
const bannerSchema = new schema({
    bannerId:objectID,
    name: String,
    src: String
});
mongoose.model('Banner',bannerSchema); //发布Banner表

const mongoose = require('mongoose');
const schema = mongoose.Schema;
let objectID = schema.Types.ObjectID;
const collectionSchema = new schema({
    collectionId:objectID,
    userId: String,
    listId: String,
    type: {
        type: Number,
        enum: [0, 1]
    }
});
mongoose.model('Collection',collectionSchema); //发布collection表

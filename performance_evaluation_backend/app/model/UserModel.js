/**
 * Model相当于模型对象，
 * 也就是创建shema的地方，
 * 表示对数据库中collection中的数据进行约束
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let UserShema = new Schema({
    name : {type:String,required: true},
    jobID: {type:String,required: true},
    password: {type: String, required: true, default:'111111'},
    department: {type:String},
    degree: {type:String},
    profession: {type:String},
    salaryID: {type:String,required:true},
    phone:{type:String},
    email:{type:String},
    role: {type:String,required: true, default:'普通用户'},
    level: {type:String},
    station: {type:String},
})
let UserModel = mongoose.model('Users',UserShema);
UserModel.ensureIndexes(function(err) {
    if(err) {
        console.log('err--->')
    } else {
        console.log('success--->');
    }
})
module.exports = UserModel;
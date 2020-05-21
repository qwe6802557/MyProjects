/**
 * 教学教研考评四大模块之一————工作量模块
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let TeachWorkloadShema = new Schema({
    name: {type: String, required: true},//用户姓名
    jobID: {type: String, require: true},//工号
    station: {type: String, require: true},//岗位
    finalAuditRecord: {type: Array, require: true},//最终审核记录
    finalStatus: {type: String, require: true},//总审核状态
    submitTime: {type:String, require: true},//提交时间
    teachingMoudle: {type:Object, require: true},//教学教研总模块，里面包括workLoad等所有子模块
})
let TeachWorkloadMoudel = mongoose.model('TeachWorkload',TeachWorkloadShema);
TeachWorkloadMoudel.ensureIndexes(function(err) {
    if (err) {
        console.log('err>> ',err);
    } else {
        console.log('success :>> ');
    }
})
module.exports = TeachWorkloadMoudel;
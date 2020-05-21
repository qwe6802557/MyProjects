/**
 * Model相当于模型对象，
 * 也就是创建shema的地方，
 * 表示对数据库中collection中的数据进行约束
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let LevelShema = new Schema({
    name : {type: String,required: true},//级别名称
    distribScienceFund: {type: String,required: true},//学院分配科研经费任务
    //教学岗
    teaching: {type: Object, required: true},
    //科研岗
    science: {type: Object, required: true},
     //教学科研并重岗
     teachAndScience: {type: Object, required: true}
  
})
let LevelMoudel = mongoose.model('Level',LevelShema);
LevelMoudel.ensureIndexes(function(err) {
    if(err) {
        console.log('err--->')
    } else {
        console.log('success--->');
    }
})
module.exports = LevelMoudel;
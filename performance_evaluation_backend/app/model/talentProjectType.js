/**
 * 学科建设--人才引进类型
 * @type {Mongoose}
 */
const mongoose = require('../../utils/db');
const Schema = mongoose.Schema;

let projectType = new Schema({
    typeName: {
        type: String,
        required: true,
    },
    typeScore: {
        type: String,
        required: true,
    },
    typePercent: {
        type: Number,
        required: false,
        default: 10
    }
});

const ProjectType = mongoose.model('TalentType',projectType);
const projectList = [{
    typeName: '人才引进外出宣传及招聘',
    typeScore: 2
}, {
    typeName: '推荐并引进成功',
    typeScore: 10
}];

ProjectType.ensureIndexes(function(err) {
    if(err) {
        console.log('err--->')
    } else {
        console.log('success--->');
    }
});

ProjectType.insertMany(projectList);

module.exports = ProjectType;
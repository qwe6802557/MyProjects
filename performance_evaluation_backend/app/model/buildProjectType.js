/**
 * 学科建设--项目类型
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

const ProjectType = mongoose.model('ProjectType',projectType);
const projectList = [{
    typeName: '学科评估工作',
    typeScore: 50
}, {
    typeName: '学位点申报工作',
    typeScore: 50
}, {
    typeName: '学位点评估报工作',
    typeScore: 50
}, {
    typeName: '国家级学科工作',
    typeScore: 50
}, {
    typeName: '省部级学科工作',
    typeScore: 30
}, {
    typeName: '校级学科工作',
    typeScore: 20
}, {
    typeName: '校外专家评审接待工作',
    typeScore: 30
}, {
    typeName: '学科处其它临时分派工作',
    typeScore: 20
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
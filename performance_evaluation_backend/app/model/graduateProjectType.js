/**
 * 学科建设--研究生工作类型
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

const ProjectType = mongoose.model('GraduateType',projectType);
const projectList = [{
    typeName: '指导省级优秀硕士论文',
    typeScore: 10
}, {
    typeName: '指导校级优秀硕士论文',
    typeScore: 5
}, {
    typeName: '招生目录编制',
    typeScore: 10
}, {
    typeName: '培养方案修订',
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
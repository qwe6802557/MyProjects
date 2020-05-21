/**
 * 学科建设--列表
 * @type {Mongoose}
 */
const mongoose = require('../../utils/db');
const Schema = mongoose.Schema;

let buildSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    handleTime: {
        type: String,
        required: false,
        default: Date.now
    },
    projectType: {
        type: String,
        required: true,
    },
    projectInfo: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: false,
    },
    status: {
        type: Number,
        enum: [0, 1, 2, 3],
        default: 0
    },
    approveName: {
        type: String,
        required: false,
        default: null
    },
    approveTime: {
        type: String,
        required: true,
        default: null
    },
});

let BuildSchema = mongoose.model('BuildList',buildSchema);
BuildSchema.ensureIndexes(function(err) {
    if(err) {
        console.log('err--->')
    } else {
        console.log('success--->');
    }
});

module.exports = BuildSchema;
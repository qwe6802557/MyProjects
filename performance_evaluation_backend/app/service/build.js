/**
 * 学科建设部分Service
 */
const mongoose = require('mongoose');
const projectModel = mongoose.model('ProjectType');
const buildModel = mongoose.model('BuildList');
const graduateTypeModel = mongoose.model('GraduateType');
const graduateModel = mongoose.model('GraduateList');
const talentTypeModel = mongoose.model('TalentType');
const talentModel = mongoose.model('TalentList');

class BuildService {
    static async addBuild (req) {
        const { projectTypeId, userId, projectInfo } = req.body;

        const result_project = await projectModel.findOne({
            _id: projectTypeId,
        });

        const projectType = result_project.typeName;
        const score = result_project.typeScore;

        await buildModel.create({
            userId,
            projectType,
            projectInfo,
            score
        });

        return true;

    }

    static async updateBuild (req) {
        const { _id, projectTypeId, userId, projectInfo } = req.body;

        const result_project = await projectModel.findOne({
            _id: projectTypeId,
        });

        const projectType = result_project.typeName;
        const score = result_project.typeScore;

        await buildModel.update({
            _id,
        }, {
            userId,
            projectType,
            projectInfo,
            score
        });

        return true;
    }

    static async deleteBuild (req) {
        const { _id } = req.body;

        await buildModel.remove({
           _id
        });

        return true;
    }

    static async addWork (req) {
        const { projectTypeId, userId, projectInfo } = req.body;

        const result_project = await graduateTypeModel.findOne({
            _id: projectTypeId,
        });

        const projectType = result_project.typeName;
        const score = result_project.typeScore;

        await graduateModel.create({
            userId,
            projectType,
            projectInfo,
            score
        });

        return true;

    }

    static async updateWork (req) {
        const { _id, projectTypeId, userId, projectInfo } = req.body;

        const result_project = await graduateTypeModel.findOne({
            _id: projectTypeId,
        });

        const projectType = result_project.typeName;
        const score = result_project.typeScore;

        await graduateModel.update({
            _id,
        }, {
            userId,
            projectType,
            projectInfo,
            score
        });

        return true;
    }

    static async deleteWork (req) {
        const { _id } = req.body;

        await graduateModel.remove({
            _id
        });

        return true;
    }

    static async addTalent (req) {
        const { projectTypeId, userId, projectInfo } = req.body;

        const result_project = await talentTypeModel.findOne({
            _id: projectTypeId,
        });

        const projectType = result_project.typeName;
        const score = result_project.typeScore;

        await talentModel.create({
            userId,
            projectType,
            projectInfo,
            score
        });

        return true;

    }

    static async updateTalent (req) {
        const { _id, projectTypeId, userId, projectInfo } = req.body;

        const result_project = await talentTypeModel.findOne({
            _id: projectTypeId,
        });

        const projectType = result_project.typeName;
        const score = result_project.typeScore;

        await talentModel.update({
            _id,
        }, {
            userId,
            projectType,
            projectInfo,
            score
        });

        return true;
    }

    static async deleteTalent (req) {
        const { _id } = req.body;

        await talentModel.remove({
            _id
        });

        return true;
    }
}

module.exports = BuildService;
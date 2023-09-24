const studyModel = require("../models/study");

module.exports = {
  createnewStudy: async (req, res) => {
    try {
      const { name } = req.body;

      const newStudy = await studyModel.createStudy(name);

      res.status(200).json({
        message: "Study created successfully",
        status: "success",
        newStudy: newStudy,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error creating study",
      });
    }
  },
  allStudyList: async (req, res, next) => {
    try {
      const allStudy = await studyModel.getAllStudy();
      res.status(200).json({
        message: "All study list",
        status: "success",
        studyList: allStudy,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error getting study list",
      });
    }
  },

  deletedStuty: async (req, res) => {
    try {
      const studyId = +req.params.studyId;
      const studyInfo = await studyModel.deleteStudy(studyId);
      res.status(200).json({
        message: "study deleted",
        status: "success",
        info: studyInfo,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error deleting study",
      });
    }
  },
  findStudy: async (req, res, next) => {
    try {
      const studyId = ++req.params.studyId;
      const studyFind = await studyModel.findUniqueStudy(studyId);
      res.status(200).json({
        message: "study deleted",
        status: "success",
        studyfind: studyFind,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error",
      });
    }
  },
  updatedStudy: async (req, res) => {
    try {
      const studyId = +req.params.studyId;
      const studyInfo = await studyModel.deleteStudy(studyId);
      res.status(200).json({
        message: "study updated successfully",
        status: "success",
        info: studyInfo,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error updating study",
      });
    }
  },
};

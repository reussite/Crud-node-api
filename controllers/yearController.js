const yearModel = require("../models/Year");

module.exports = {
  register: async (req, res) => {
    try {
      const { school_year } = req.body;
      const newSchoolYear = await yearModel.createYear(newSchoolYear);
      res.status(200).json({
        message: "Create Year successfully",
        status: "success",
        schoolYear: newSchoolYear,
      });
    } catch (error) {
      res.status(404).json({ message: "Error creating school" });
    }
  },
};

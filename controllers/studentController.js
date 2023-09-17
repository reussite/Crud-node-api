const studentModel = require("../models/Student");

module.exports = {
  createStudent: async (req, res) => {
    try {
      const { name, firstName, email, birthday, nationnality, contact, phone } =
        req.body;

      const newStudent = await studentModel.studentRegister({
        name: name,
        firstName: firstName,
        email: email,
        birthday: birthday,
        nationnality: nationnality,
        contact: contact,
        phone: phone,
      });
      res
        .status(200)
        .json({ message: "Enrégistrement d'un étudient réussi", newStudent });
    } catch (error) {
      //res.status(400).json({message: "Erreur d'enrégistrement d'un étudient"});
      console.log(error);
    }
  },
};

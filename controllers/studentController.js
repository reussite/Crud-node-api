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
      res.status(200).json({
        message: "Student profil insertion successfuly.",
        newStudent,
      });
    } catch (error) {
      res.status(400).json({
        message: "Student profil insertion failed.",
      });
    }
  },
  updateStudent: async (req, res) => {
    try {
      const studentId = +req.params.id;
      console.log(studentId);
      const studentata = ({
        name,
        firstName,
        email,
        birthday,
        nationnality,
        contact,
        phone,
      } = req.body);
      const updateStudentData = await studentModel.studentUpdate(studentId, {
        name: name,
        firstName: firstName,
        email: email,
        birthday: birthday,
        nationnality: nationnality,
        contact: contact,
        phone: phone,
      });

      res.status(200).json({
        message: "",
        updateStudentData,
      });
    } catch (error) {
      res.status(400).json({ message: "Student update is failed." });
    }
  },
  findStudent: async (req, res) => {
    try {
      const studentId = +req.params.studentId;
      const findStudentData = await studentModel.findUniquestudent(studentId);
      res.status(200).json({ message: "Etudiant trouvé :", findStudentData });
    } catch (error) {
      res.status(400).json({ message: "Etudient find successfully :", error });
    }
  },
  delectStudent: async (req, res) => {
    try {
      const studentId = +req.params.studentId;
      const deleteStudentData = await studentModel.studentDelete(studentId);
      res.status(200).json({ message: "Student deleted", deleteStudentData });
    } catch (error) {
      res.status(400).json({ message: "Error deleting student", error });
    }
  },
};

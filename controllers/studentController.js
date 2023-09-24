const studentModel = require("../models/Student");

module.exports = {
  createStudent: async (req, res) => {
    try {
      const {
        student_name,
        firstName,
        email,
        birthday,
        nationnality,
        contact,
        phone,
      } = req.body;

      const newStudent = await studentModel.studentRegister({
        student_name: student_name,
        firstName: firstName,
        email: email,
        birthday: birthday,
        nationnality: nationnality,
        contact: contact,
        phone: phone,
      });
      res.status(200).json({
        message: "Student profil insertion successfuly.",
        status: true,
        student: newStudent,
      });
    } catch (error) {
      /* res.status(400).json({
        message: "Student profil insertion failed.",
      }); */
      console.log(error);
    }
  },
  updateStudent: async (req, res) => {
    try {
      const studentId = +req.params.id;
      console.log(studentId);
      const studentata = ({
        student_name,
        firstName,
        email,
        birthday,
        nationnality,
        contact,
        phone,
      } = req.body);
      const updateStudentData = await studentModel.studentUpdate(studentId, {
        student_name: student_name,
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
      console.log(studentId);
      const deleteStudentData = await studentModel.studentDelete(studentId);
      res.status(200).json({
        message: "Student deleted",
        status: true,
        information: deleteStudentData,
      });
    } catch (error) {
      /* res.status(400).json({
        message: "Error deleting student",
        error,
      }); */
      console.log(error);
    }
  },

  getAllStudentListe: async (req, res) => {
    try {
      const allStudent = await studentModel.studentList();

      res.status(200).json({
        message: "Student List",
        status: "success",
        students: allStudent,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

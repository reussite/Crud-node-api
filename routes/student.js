var express = require("express");
var router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/register", studentController.createStudent);
router.put("/update/:id", studentController.updateStudent);
router.delete("/delete/:studentId", studentController.delectStudent);
router.get("/find/:studentId", studentController.findStudent);
router.get("/list", studentController.getAllStudentListe);

module.exports = router;

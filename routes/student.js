var express = require("express");
var router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/register", studentController.createStudent);
router.put("/update/:id", studentController.updateStudent);

module.exports = router;

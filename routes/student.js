var express = require("express");
var router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/register", studentController.createStudent);

module.exports = router;

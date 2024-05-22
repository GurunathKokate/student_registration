const express = require('express');
const { createStudent, loginUser } =require('../controller/student.controller');

let router = express.Router();

router.post("/add-student",createStudent)
router.post("/login-student", loginUser)

module.exports = router
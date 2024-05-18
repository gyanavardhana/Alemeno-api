const express = require('express');
const router = express.Router();
const { getAllEnrolledCourses, putStatus } = require('../controllers/enrolledcourses');

router.get('/enrolledcourses', getAllEnrolledCourses);
router.patch('/enrolledcourses/:id', putStatus);

module.exports = router;

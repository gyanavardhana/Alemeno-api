const express = require('express');
const router = express.Router();
const { getAllCourses, putLikes } = require('../controllers/courses');

router.get('/courses', getAllCourses);
router.patch('/courses/:id', putLikes);

module.exports = router;
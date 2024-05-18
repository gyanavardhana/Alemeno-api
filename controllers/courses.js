const Courses = require('../models/courses');

const getAllCourses = async (req, res) => {
    try {
        const courses = await Courses.find();
        res.json(courses);
    } catch (error) {
        res.json({ message: error });
    }
}

const putLikes = async (req, res) => {
    try {
        const course = await Courses.findOne({id: req.params.id});
        course.likes = req.body.likes;
        await course.save();
        res.json(course);
    } catch (error) {
        res.json({ message: error });
    }
}


module.exports = {
    getAllCourses,
    putLikes
}
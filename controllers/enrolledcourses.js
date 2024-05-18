const EnrolledCourse = require('../models/enrolledcourses');

const getAllEnrolledCourses = async (req, res) => {
    try {
        const enrolledcourses = await EnrolledCourse.find();
        res.json(enrolledcourses);
    } catch (error) {
        res.json({ message: error });
    }
}

const putStatus = async (req, res) => {
    try {
        const enrolledcourse = await EnrolledCourse.findOne({ id: req.params.id });
        if (!enrolledcourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        enrolledcourse.status = req.body.status;
        await enrolledcourse.save();

        res.json(enrolledcourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllEnrolledCourses,
    putStatus
}
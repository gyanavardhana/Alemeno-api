const mongoose = require('mongoose');

const EnrolledCourseSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  courseName: { type: String, required: true },
  instructorName: { type: String, required: true },
  thumbnail: { type: String, required: true },
  dueDate: { type: Date, required: true },
  progress: { type: Number, required: true },
  status: { type: String, required: true }
});

const EnrolledCourse = mongoose.model('EnrolledCourse', EnrolledCourseSchema);

module.exports = EnrolledCourse;

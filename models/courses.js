const mongoose = require('mongoose');

const SyllabusSchema = new mongoose.Schema({
  week: { type: Number, required: true },
  topic: { type: String, required: true },
  content: { type: String, required: true }
});

const CourseSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  instructor: { type: String, required: true },
  description: { type: String, required: true },
  enrollmentStatus: { type: String, required: true },
  thumbnail: { type: String, required: true },
  duration: { type: String, required: true },
  schedule: { type: String, required: true },
  location: { type: String, required: true },
  prerequisites: [{ type: String, required: true }],
  syllabus: [SyllabusSchema],
  likes: { type: Number, default: 0 }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;

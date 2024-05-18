const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/dbconnection');
const coursesroutes = require('./routes/courses');
const enrolledcoursesroutes = require('./routes/enrolledcourses');

const app = express();

// Apply CORS middleware before any route handlers
app.use(cors({ origin: true }));

// Parse JSON bodies
app.use(express.json());

// Define your routes
app.use(coursesroutes);
app.use(enrolledcoursesroutes);
  
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

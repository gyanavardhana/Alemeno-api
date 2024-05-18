const express = require('express')
require('dotenv').config();
const app = express()
const db = require('./db/dbconnection');
const coursesroutes = require('./routes/courses');
const enrolledcoursesroutes = require('./routes/enrolledcourses');
app.use(express.json());
app.use(coursesroutes);
app.use(enrolledcoursesroutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
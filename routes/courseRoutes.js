const express = require('express');
const {addCourse, getAllCourses, getCourse, deleteCourse} = require('../controllers/courseController');

const router = express.Router();

router.post('/courses', addCourse);
router.get('/allCourses', getAllCourses);
router.get('/course/:id', getCourse);
router.delete('/courses/:id', deleteCourse);
router.put('/courses', addCourse);



module.exports={routes: router};
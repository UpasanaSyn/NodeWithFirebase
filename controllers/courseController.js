const { all } = require('underscore');
const firebase = require('../db');
// const course = require('../models');
const fireDb = firebase.database();

const addCourse = async (req, res, next) => {
    try {
        // const courseData = req.body;
        console.log('--req--', req.body);
        var allCourses = await fireDb.ref('courses/');
        
        await allCourses.orderByChild('id').equalTo(req.body.id).once('value', (snapshot) => {
            if (snapshot.exists()){
                const userData = snapshot.val();
                console.log("exists!", userData);
                
                let data = Object.entries(userData).map((item) => ({
                    ...item[1],
                    key: item[0],
                  }));
                const course = fireDb.ref(`courses/${data[0].key}`).set({
                    id: req.body.id,
                    name: req.body.name,
                    author: req.body.author
                  });
                res.send(course);
              } else {
                const course = allCourses.push({
                    id: req.body.id,
                    name: req.body.name,
                    author: req.body.author
                  });
                res.send(course);
              }
        
        });
    }catch (error) {
            res.status(400).send(error.message);
        }
}

const getAllCourses = async (req, res, next) => {
    try {

        var allCourses = await fireDb.ref('courses/');
        const courseList = [];
        if(allCourses.empty) {
            res.status(404).send("No data available");
        } else {
        await allCourses.on('value', (snapshot) => {
            const data = snapshot.val();
            if(data) {
                Object.entries(data).forEach(([key, val]) => {
                    courseList.push(val);
                });
                res.send(courseList);
            } else {
                res.status(404).send("No data available");
            }
            
        });
        
    }
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCourse = async (req, res, next) => {
    try {
        const id = req.params.id;
        var courses = await fireDb.ref('courses/');
        if(courses.empty) {
            res.status(404).send("No data available");
        } else {
        await courses.on('value', (snapshot) => {
            const data = snapshot.val();
            var courseByID = {};
            Object.entries(data).forEach(([key, val]) => {
                if (val.id == id) {
                    courseByID = val;
                }
            });
            res.send(courseByID);
        });
    } 
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCourse = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        var coursesRef = await fireDb.ref('courses/');
        
        await coursesRef.orderByChild('id').equalTo(id).once('value', (snapshot) => {
            if (snapshot.exists()){
                const userData = snapshot.val();
                console.log("_________exists!________", userData);
                
                let data = Object.entries(userData).map((item) => ({
                    ...item[1],
                    key: item[0],
                  }));
                fireDb.ref(`courses/${data[0].key}`).remove().then(function() {
                    res.send('Deleted!');
                })
                .catch(function(error) {
                    res.status(400).send(error.message);
                });
              } else {
                res.status(200).send('Record not found!');
              }
        
        });
            
    }catch (error) {
            res.status(400).send(error.message);
        }
}


module.exports={addCourse, getAllCourses, getCourse, deleteCourse};
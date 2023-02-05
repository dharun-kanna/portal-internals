import courseModel from "../models/courseModel.js";
import facultyModel from "../models/facultyModel.js";
import studentModel from "../models/studentModel.js";


const courseController = {
    getAll : async(req,res)=>{
        const allCourses = await courseModel.find().populate([{path:"faculty",model:facultyModel},{path:"students",model:studentModel}]);
        // console.log(allCourses);
        res.json(allCourses);
    },
    getCourseById : async(req,res)=>{
        const course = await courseModel.findOne({courseId : req.body.courseId}).populate([{path:"faculty",model:facultyModel},{path:"students",model:studentModel}]);
        res.json(course);
    }
}

export default courseController;
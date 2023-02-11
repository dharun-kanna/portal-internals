import studentModel from "../models/studentModel.js";
import courseModel from "../models/courseModel.js";
import internalsModel from "../models/internalsModel.js";
const internalsController = {
    getInternals : async(req,res)=>{
        const student = await studentModel.findOne({rollNo : req.body.rollno })
        .populate([{path:"coursesEnrolled.course",model:courseModel},{path:"coursesEnrolled.internals",model:internalsModel}]);
        const courseInternals = student.coursesEnrolled.find((e)=> e.course.courseName==req.body.courseName);
        const internals  = {
            name : student.name,
            course : courseInternals.course.courseName,
            internals: {
                UT : courseInternals.internals.unitTest.map((obj) => {return {no : obj.no, mark :obj.mark}})
            }
        }

        res.json(internals);
    }
}




export default internalsController;
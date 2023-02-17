import studentModel from "../models/studentModel.js";
import courseModel from "../models/courseModel.js";
import internalsModel from "../models/internalsModel.js";
import facultyModel from "../models/facultyModel.js";


const internalsController = {
    getInternals : async(req,res)=>{
        switch(req.baseUrl){
            case '/student':
                console.log(req.originalUrl);
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
                break;
            case '/faculty':
                const faculty = await facultyModel.findOne({name:req.body.name})
                .populate(
                {
                    path:"coursesHandling",
                    model:courseModel,
                    populate : {
                        path:"students",
                        model:studentModel
                    }
                });
                res.send(faculty)
                break;
            default : 
                res.json({status : "in default", baseurl  : req.baseUrl})
        }
        
    }
}




export default internalsController;
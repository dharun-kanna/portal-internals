import studentModel from "../models/studentModel.js";
import courseModel from "../models/courseModel.js";
import internalsModel from "../models/internalsModel.js";


const studentController = {
    getByRollno : async(req,res)=>{
        const student = await studentModel.findOne({rollNo : req.body.rollno })
        .populate([{path:"coursesEnrolled.course",model:courseModel},{path:"coursesEnrolled.internals",model:internalsModel}]); 
        res.json(student);
    }
}

export default studentController;
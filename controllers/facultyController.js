import facultyModel from "../models/facultyModel.js";
import courseModel from "../models/courseModel.js";
import studentModel from "../models/studentModel.js";


const facultyController = {
    getAll : async(req,res)=>{
        const faculties = await facultyModel.find().populate({path:"coursesHandling",model:courseModel});
        res.json(faculties);
    },
    getByName : async(req,res)=>{
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
        res.json(faculty)
    }
}

export default facultyController;
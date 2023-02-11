import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    rollNo : Number,
    name : String,
    coursesEnrolled: [{
        course:{
            type: mongoose.Schema.Types.ObjectId,
            ref : "Course"
        },
        internals:{
            type:mongoose.Schema.Types.ObjectId,
            ref : "Internal"
        }
    }]
})

const studentModel = mongoose.model("Student",studentSchema);

export default studentModel;



import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    rollNo : Number,
    name : String,
    coursesEnrolled : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }]
})

const studentModel = mongoose.model("Student",studentSchema);

export default studentModel;



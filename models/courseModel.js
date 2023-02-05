import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseId : Number,
    courseName : String,
    faculty : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Faculty"
    },
    students : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Student"
    }]
});

const courseModel = mongoose.model("Course",courseSchema);

export default courseModel;





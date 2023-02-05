import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    name: String,
    coursesHandling : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]
})

const facultyModel = mongoose.model("Faculty",facultySchema);

export default facultyModel;
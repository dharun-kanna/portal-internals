import mongoose from "mongoose";

const internalsSchema = mongoose.Schema({
    student : {type : mongoose.Schema.Types.ObjectId, ref : "Student"},
    course : {type : mongoose.Schema.Types.ObjectId, ref : "Course"},
    unitTest : [{
        no : Number,
        mark: Number
    }],
    tutorial : [{
        no : Number,
        mark: Number
    }],
    assignment: [{
        no : Number,
        mark: Number
    }],
});

const internalsModel = mongoose.model("Internal",internalsSchema);

export default internalsModel;

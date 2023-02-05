import mongoose from "mongoose";


const internalsSchema = mongoose.Schema({
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

const internalsModel = mongo
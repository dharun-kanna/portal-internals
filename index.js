import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

// DB Connection

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log(`DB Connected`);
},(err)=>{
    console.log(`Error : ${err}`);
})




//Logger
app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

import courseRouter from './routes/courseRoute.js';

app.use('/course',courseRouter);

import facultyRoute from './routes/facultyRoute.js';
app.use('/faculty',facultyRoute);

// import facultyModel from "./models/facultyModel.js";

// const faculty1 = new facultyModel({
//     name : "Hitesh"
// })
// await faculty1.save();

// const faculty2 = new facultyModel({
//     name : "Naveen"
// })

// await faculty2.save();


// import courseModel from "./models/courseModel.js";

// const course1 = new courseModel({
//     courseId : 1,
//     courseName : "Machine Learning",
// })
// await course1.save();

// const course2 = new courseModel({
//     courseId : 2,
//     courseName : "Blockchain"
// })

// await course2.save();

// const students = [{
//     rollNo: 12,
//     name:"Dharun"
// },
// {
//     rollNo: 4,
//     name: "Stepen"
// },
// {
//     rollNo: 6,
//     name : "Gokul",
// }
// ]

// import studentModel from "./models/studentModel.js";

// for(let i=0 ; i< students.length ;i++){
//     const student = new studentModel({
//         rollNo : students[i].rollNo,
//         name : students[i].name
//     })
//     await student.save()
// }

// import facultyModel from "./models/facultyModel.js";
// import courseModel from "./models/courseModel.js";

// const hitesh = await facultyModel.findOne({name: "Hitesh"});
// console.log(hitesh);
// const ml = await courseModel.findOne({courseName:"Machine Learning"})
// console.log(ml);
// ml.faculty = hitesh._id;
// hitesh.coursesHandling.push(ml._id)
// await ml.save();
// await hitesh.save();

// const hitesh = await facultyModel.findOne({name:"Hitesh"}).populate("coursesHandling");
// console.log(hitesh);

// import studentModel from "./models/studentModel.js";
// import courseModel from "./models/courseModel.js";


// const students = await studentModel.find();

// const ml = await courseModel.findOne({name: "Machine Learning"});

// for(let i=0;i<students.length;i++){
//     ml.students.push(students[i]._id);
//     students[i].coursesEnrolled.push(ml._id);

//     await ml.save();
//     await students[i].save();
// }










app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
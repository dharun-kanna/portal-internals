import express from "express";
import courseController from "../controllers/courseController.js";

const router = express.Router();


router.get('/all',courseController.getAll);


router.get('/',courseController.getCourseById);


export default router;
import express from "express";
import facultyController from "../controllers/facultyController.js";

const router = express.Router();


router.get('/all',facultyController.getAll);

router.get('/',facultyController.getByName);


export default router;




import express from "express";
import facultyController from "../controllers/facultyController.js";
import internalsController from "../controllers/internalsController.js";

const router = express.Router();


router.get('/all',facultyController.getAll);

router.get('/',facultyController.getByName);

router.get('/internals',internalsController.getInternals);


export default router;




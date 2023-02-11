import express from "express";
import studentController from "../controllers/studentController.js";
import internalsController from "../controllers/internalsController.js";
const router = express.Router();

router.get('/',studentController.getByRollno);


router.get('/internals',internalsController.getInternals);



export default router;







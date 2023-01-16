import {Router} from "express";
import status from "./healthStatus.js";
import forecast from "./forecast.js"
import sample from "./sample.js"



const router = Router();

router.use("/status", status);
router.use("/forecast", forecast);
router.use("/sample", sample);

export default router;
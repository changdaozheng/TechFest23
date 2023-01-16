import {Router} from "express";
import status from "./healthStatus.js";
import forecastRouter from "./forecast.js"
import campaignRouter from "./campaign.js"
import sampleRouter from "./sample.js"



const router = Router();

router.use("/status", status);
router.use("/forecast", forecastRouter);
router.use("/campaign", campaignRouter);
router.use("/sample", sampleRouter);

export default router;
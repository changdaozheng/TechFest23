import {Router} from "express";
import status from "./healthStatus.js";
import forecastRouter from "./forecast.js"
import campaignRouter from "./campaign.js"
import inventoryRouter from "./inventory.js"
import ordersRouter from "./orders.js"
import sampleRouter from "./sample.js"


const router = Router();

router.use("/", status);
router.use("/forecast", forecastRouter);
router.use("/campaign", campaignRouter);
router.use("/inventory", inventoryRouter);
router.use("/orders", ordersRouter);
router.use("/sample", sampleRouter);

export default router;
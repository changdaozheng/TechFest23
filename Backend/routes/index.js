import {Router} from "express";
import status from "./healthStatus.js";
import sample from "./sample.js"



const router = Router();

router.use("/status", status);
router.use("/sample", sample);

export default router;
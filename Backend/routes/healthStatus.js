import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Backend Healthy");
});

router.head("/", (req, res) => {
    res.send("Backend Healthy");
});

export default router;
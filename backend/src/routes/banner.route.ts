import { Router } from "express";
import { createBanner } from "../controller/banner.controller";
import { uploadBanner } from "../middlewares/upload.middleware";

const router = Router();

router.post("/", uploadBanner.single("image"), createBanner);

export default router;

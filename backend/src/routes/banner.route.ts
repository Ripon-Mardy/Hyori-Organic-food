import { Router } from "express";
import { createBanner } from "../controller/banner.controller";
import { upload } from "../middlewares/upload";

const router = Router();

router.post("/", upload('banners').single('image'), createBanner);

export default router;

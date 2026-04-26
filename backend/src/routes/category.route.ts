import { Router } from "express";
import { upload } from "../middlewares/upload";

import {
  createCategory,
  getAllCategory,
  getSingleCategory,
} from "../controller/category.controller";

const router = Router();

router.post("/", upload.single("image"), createCategory);
router.get("/", getAllCategory);
router.get("/:id", getSingleCategory);

export default router;

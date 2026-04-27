import { Router } from "express";
import { upload } from "../middlewares/upload";

import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
} from "../controller/category.controller";

const router = Router();

// routes
router.post("/", upload.single("image"), createCategory);
router.get("/", getAllCategory);
router.get("/:id", getSingleCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;

import { Router } from "express";

import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
} from "../controller/category.controller";
import { upload } from "../middlewares/upload";

const router = Router();

// routes
router.post("/", upload('categories').single('image'), createCategory);
router.get("/", getAllCategory);
router.get("/:id", getSingleCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;

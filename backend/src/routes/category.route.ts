import { Router } from "express";

import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
} from "../controller/category.controller";

const router = Router();

// routes
router.post("/", createCategory);
router.get("/", getAllCategory);
router.get("/:id", getSingleCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;

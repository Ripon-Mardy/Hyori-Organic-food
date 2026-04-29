import { Router } from "express";
import {
  createMenu,
  deleteMenu,
  getAllMenu,
  updateMenu,
} from "../controller/menu.controller";

const router = Router();

router.post("/", createMenu);
router.get("/", getAllMenu);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);

export default router;

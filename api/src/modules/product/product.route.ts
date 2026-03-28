import { Router } from "express";

import { addProduct, getAllProducts } from "./product.controller";

const router = Router();

router.post("/", addProduct);
router.get("/", getAllProducts);

export default router;

import { Router } from "express";
import { createProduct, getAllProducts } from "../controller/product.controller";
import { upload } from "../middlewares/upload";

const router = Router();

router.post('/', upload('products').array('images', 6), createProduct);
router.get('/', getAllProducts)

export default router;
import { Router } from "express";
import getProduct from "./product.controller";

const router = Router();

router.get('/', getProduct)
router.get("/user", (req, res) => {
    res.send("Hello user page");
})

export default router;
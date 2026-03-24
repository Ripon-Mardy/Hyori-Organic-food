import { Request, Response } from "express"
import { getAllProducts } from "./product.service"

const getProduct = (req: Request, res: Response) => {
    const products = getAllProducts();

    res.status(200).json({
        success : true,
        data : products
    })
}

export default getProduct;
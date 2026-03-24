import { Product } from "./product.model"

export const getAllProducts = (): Product[] => {
    return [
        { id: 1, name: "Laptop", price: 20 },
        { id: 2, name: "Phone", price: 500 }
    ]
}
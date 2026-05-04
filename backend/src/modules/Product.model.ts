import mongoose, { Document, mongo, Schema } from 'mongoose'

export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    isActive: boolean;
}

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            unique: true
        },
        description: String,
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
        },
        stock: {
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
)

export const Product = mongoose.model('Product', productSchema)

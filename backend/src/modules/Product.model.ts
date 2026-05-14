import mongoose, { Document, mongo, Schema, Types } from 'mongoose'

export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    price: number;
    stock: number;
    image: string[];
    category: Types.ObjectId;
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
            type: [String],
        },
        stock: {
            type: Number,
            default: 0,
            required: true,
            min: 0
        },
        category: {
            type: Schema.Types.ObjectId,
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

export const Product = mongoose.model<IProduct>('Product', productSchema);
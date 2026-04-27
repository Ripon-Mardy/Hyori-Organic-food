import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document<Object> {
  _id: string;
  name: string;
  image: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const categoryShema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<ICategory>("Category", categoryShema);

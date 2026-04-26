import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document<Object> {
  _id: string;
  name: string;
  slug: string;
  parent?: mongoose.Types.ObjectId | null;
  image?: string;
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

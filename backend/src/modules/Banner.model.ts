import mongoose, { Document, Schema } from "mongoose";

export interface IBanner extends Document {
  name: string;
  image: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const bannerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const bannerModel = mongoose.model("Banner", bannerSchema);

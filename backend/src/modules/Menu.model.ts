import mongoose, { Document, Schema } from "mongoose";

export interface IMenu extends Document {
  name: string;
  path: string;
  isActive: boolean;
}

const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export const MenuModel = mongoose.model("Menu", menuSchema);

import mongoose, { Document, Schema } from "mongoose";
import slugify from "slugify";

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
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
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

// auto generate slug
categoryShema.pre("save", function () {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true });
  }
});

export default mongoose.model<ICategory>("Catgory", categoryShema);

import mongoose, { Document, Schema } from "mongoose";
import slugify from 'slugify'

export interface ICategory extends Document<Object> {
  _id: string;
  name: string;
  slug : string;
  image: string;
  parent : mongoose.Types.ObjectId | null;
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
    slug : {
      type : String,
      unique : true,
      lowercase : true
    },
    image: {
      type: String,
      required : true,
      default: null,
    },
    parent : {
      type : Schema.Types.ObjectId,
      ref : 'Category',
      default : null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

// ===== auto slug ===== 
categoryShema.pre("save", function() {
  if(!this.slug) {
    this.slug = slugify(this.name, {lower: true})
  }
})

export default mongoose.model<ICategory>("Category", categoryShema);

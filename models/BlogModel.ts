// import mongoose from "mongoose";

// const BlogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   slug: { type: String, unique: true },
//   content: { type: String, required: true },
//   imageUrl: { type: String },
//   isFeatured: { type: Boolean, default: false },
//   tags: [String],
//   category: { type: String, required: true },
//   author: { type: String, default: "Azam" },
//   createdAt: { type: Date, default: Date.now },
// });

// export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
// models/BlogModel.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  category: string;
  tags?: string[];
  imageUrl?: string;
  content: string;
  createdAt: Date;
  isFeatured?: boolean;
}

const BlogSchema: Schema<IBlog> = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  imageUrl: { type: String },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isFeatured: { type: Boolean, default: false },
});

// ✅ Ensure schema is not recompiled
export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

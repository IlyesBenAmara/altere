import { Schema, model } from "mongoose";

export interface ICategory {
  id: string;
  title: string;
  description?: string;
  category: ICategory;
}

const categorySchema = new Schema<ICategory>({
  title: { type: String, required: true },
  description: String,
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const Category = model<ICategory>("Cart", categorySchema);

export default Category;

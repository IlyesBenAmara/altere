import { model, Schema } from "mongoose";
import { ICategory } from "./Category";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  stock: number | null;
  category: ICategory;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: Number,
  stock: Number,
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const Product = model<IProduct>("Cart", productSchema);

export default Product;

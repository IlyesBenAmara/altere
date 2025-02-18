import { model, Schema } from "mongoose";
import { IProduct } from "./Product";

export interface ICart {
  id: string;
  products: IProduct[];
  totalPrice: number | null;
}

const cartSchema = new Schema<ICart>({
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  totalPrice: [{ type: Number }],
});

const Cart = model<ICart>("Cart", cartSchema);

export default Cart;

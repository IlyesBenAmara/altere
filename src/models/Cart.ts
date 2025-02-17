import { Product } from "./Product.js";

export interface Cart {
  id: string;
  products: Product[];
  totalPrice: number | null;
}

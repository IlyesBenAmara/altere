import { Router } from "express";
import { getCart, putCart } from "../controllers/cart";

const cartRouter = Router();

cartRouter.get("", getCart);

cartRouter.put("", putCart);

export default cartRouter;

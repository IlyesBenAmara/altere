import express from "express";
import bodyParser from "body-parser";
import cartRouter from "./routes/cart";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";

const app = express();

// Express configuration
app.set("port", 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);

export default app;

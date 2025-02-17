import express from "express";
import bodyParser from "body-parser";
import cartRouter from "./routes/cart.js";
import productRouter from "./routes/product.js";
import categoryRouter from "./routes/category.js";

const app = express();

// Express configuration
app.set("port", 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.use(cartRouter);
app.use(productRouter);
app.use(categoryRouter);

export default app;

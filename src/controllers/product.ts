import Cart from "../models/Cart";
import Product from "../models/Product";

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });

    if (!product) {
      return res.status(400).send({ message: "product not found" });
    }

    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send("error on getting product: ", e);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send("error on getting products: ", e);
  }
};

const putProduct = async (req, res) => {};

export const postProduct = async (req, res) => {
  try {
    const product = new Product({ ...req.body });
    product.save();

    res.status(200).send({ message: "saved" });
  } catch (e) {
    return res.status(500).send("error on adding new product: ", e);
  }
};

export const addToCart = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });

    const cart = await Cart.findOne({ _id: req.body.cartId });

    const updatedCart = Cart.findOneAndUpdate(
      { _id: req.body.cartId },
      {
        ...Cart,
        products: [cart.products, product],
      }
    );

    res.status(200).send(updatedCart);
  } catch (e) {
    return res.status(500).send("error on adding product to cart: ", e);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.params.id });

    return res.status(200).send("deleted");
  } catch (e) {
    return res.status(500).send("error on deleting category: ", e);
  }
};

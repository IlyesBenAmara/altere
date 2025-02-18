import Category from "../models/Category";
import Product from "../models/Product";

export const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ id: req.params.id });

    if (!category) {
      return res.status(404).send({ message: "category not found" });
    }

    return res.status(200).send(category);
  } catch (e) {
    return res.status(500).send("error on getting category: ", e);
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    return res.status(200).send(categories);
  } catch (e) {
    return res.status(500).send("error on getting categories: ", e);
  }
};

export const putCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { id: req.params.id },
      {
        ...req.body,
      }
    );

    return res.status(200).send(category);
  } catch (e) {
    return res.status(500).send("error on updating category: ", e);
  }
};

export const removeProductFromCategory = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.body.productId });

    if (!product) {
      return res.status(400).send({ message: "product not found" });
    }

    if (product.category !== req.params.id) {
      return res
        .status(400)
        .send({ message: "product does not exist in category" });
    }

    const updatedProduct = Product.findOneAndUpdate(
      { id: req.body.productId },
      { ...product, category: null }
    );
    return res.status(200).send(updatedProduct);
  } catch (e) {
    return res.status(500).send("error on updating category: ", e);
  }
};

export const postCategory = async (req, res) => {
  try {
    const category = new Category({ ...req.body });

    category.save();

    res.status(200).send({ message: "saved" });
  } catch (e) {
    return res.status(500).send("error on adding category: ", e);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({ id: req.params.id });

    if (!category) {
      return res.status(404).send({ message: "category not found" });
    }

    return res.status(200).send("deleted");
  } catch (e) {
    return res.status(500).send("error on deleting category: ", e);
  }
};

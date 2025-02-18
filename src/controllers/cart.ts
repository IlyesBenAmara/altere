import Cart from "../models/Cart";

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ id: req.params.id });

    if (!cart) {
      return res.status(404).send({ message: "cart not found" });
    }

    return res.status(200).send(cart);
  } catch (e) {
    return res.status(500).send("error on getting cart: ", e);
  }
};

export const putCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { id: req.params.id },
      { ...req.body }
    );

    return res.status(200).send(cart);
  } catch (e) {
    return res.status(500).send("error on updating cart: ", e);
  }
};

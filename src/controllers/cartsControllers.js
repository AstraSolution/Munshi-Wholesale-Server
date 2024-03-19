const Carts = require("../models/CartsModel");

// get my all carts by email
exports.getMyCartsController = async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { customer_email: email };
    const carts = await Carts.find(filter);

    res.send( carts);
  } catch (error) {
    console.error("Error getting my carts data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get one carts
exports.getOneCartController = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Carts.findById(id);
    res.send(cart);
  } catch (error) {
    console.error("Error getting cart data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// add to cart
exports.postCartController = async (req, res) => {
  try {
    const cart = req.body;
    const email = req.params.email;
    const filter = { customer_email: email };
    const carts = await Carts.find(filter);
    const existingProduct = carts.find((item) => item.product_id === cart?.product_id);

    if (existingProduct) {
      return res.send({
        message: "This product already exists",
        insertedId: null,
      });
    }
    const newCart = new Carts(cart);
    const result = await newCart.save();
    res.send(result);
  } catch (error) {
    console.error("Error getting cart data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateCartController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Carts.findByIdAndUpdate(id, req.body, { new: true });
    res.send(result);
  } catch (error) {
    console.error("Error update cart data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete a cart
exports.deleteCartController = async (req, res) => {
  try {
    const result = await Carts.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    console.error("Error delete cart data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



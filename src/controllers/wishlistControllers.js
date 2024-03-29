const Wishlist = require("../models/WishlistsModel");


// get wishlist controller
exports.getWishlist = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const wishlist = await Wishlist.find({ customer_email: userEmail });
    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// add new wishlist controller
exports.addToWishlist = async (req, res) => {
  try {
    // const { userEmail, bookId, title, cover, writer, price } = req.body;
    const newWishlist = new Wishlist(req.body);
    await newWishlist.save();
    res.status(201).json(newWishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// remove wishlist controrller
exports.removeFromWishlist = async (req, res) => {
  try {
    const wishlistId = req.params.wishlistId;
    await Wishlist.findByIdAndDelete(wishlistId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

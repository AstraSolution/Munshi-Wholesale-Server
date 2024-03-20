const express = require("express");
const { getWishlist, addToWishlist, removeFromWishlist } = require("../controllers/wishlistControllers");

const wishlistRouter = express.Router();

// get all wishlist
wishlistRouter.get("/wishlist/:email", getWishlist);

// get all wishlist
wishlistRouter.post("/wishlist", addToWishlist);

// get all wishlist
wishlistRouter.delete("/wishlist/:id", removeFromWishlist);



module.exports = wishlistRouter;
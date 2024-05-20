const express = require("express");
const { getWishlist, addToWishlist, removeFromWishlist , addToWishlists} = require("../controllers/wishlistControllers");

const wishlistRouter = express.Router();

// get all wishlist
wishlistRouter.get("/wishlist/:email", getWishlist);

// post a wishlist
wishlistRouter.post("/wishlist/:email", addToWishlist);

// post many wishlist
wishlistRouter.post("/wishlists/:email", addToWishlists);

// delete a wishlist
wishlistRouter.delete("/wishlist/:id", removeFromWishlist);



module.exports = wishlistRouter;
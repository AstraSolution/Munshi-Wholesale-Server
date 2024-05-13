const express = require("express");
const {
  getReviewsByProductId,
  postReview,
  deleteReview,
  updateReview,
  getOneReview,
  getReviewsByUserEmail,
} = require("../controllers/reviewsControllers");
const reviewsRouter = express.Router();

// get all reviews by product_id
reviewsRouter.get("/reviews/:productId", getReviewsByProductId);

// post a review
reviewsRouter.post("/reviews", postReview);

// get a review
reviewsRouter.get("/reviews/:id", getOneReview);

// delete a review by id
reviewsRouter.delete("/reviews/:id", deleteReview);

// update a review by id
reviewsRouter.patch("/reviews/:id", updateReview);

// get review by user email
reviewsRouter.get("/reviews/:userEmail", getReviewsByUserEmail);

module.exports = reviewsRouter;

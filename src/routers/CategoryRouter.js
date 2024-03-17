const express = require("express");
const {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require("../controllers/CategoryController");
const categoryRouter = express.Router();

// route to get all categories
categoryRouter.get("/category", getAllCategories);

// route to create a new category
categoryRouter.post("/category", createCategory);

// route to get a single category by ID
categoryRouter.get("/category/:id", getCategoryById);

// route to update a category by ID
categoryRouter.put("/category/:id", updateCategoryById);

// route to delete a category by ID
categoryRouter.delete("/category/:id", deleteCategoryById);

module.exports = categoryRouter;

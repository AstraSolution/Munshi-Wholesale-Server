const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByTitle,
  getProductsByTitleCategoryBrand,
} = require("../controllers/ProductController");
const productRouter = express.Router();

// get all product router
productRouter.get("/products", getAllProducts);

// create new product router
productRouter.post("/products", createProduct);

// get a product by id
productRouter.get("/products/:id", getProductById);

// update product details by produc id
productRouter.put("/products/:id", updateProductById);

// delete a product by product id
productRouter.delete("/products/:id", deleteProductById);

// get products accoriding to the title
productRouter.get("/products/title/:title", getProductsByTitle);

// get products accoriding to the brand
productRouter.get("/products/brand/:brand", getProductsByBrand);

// get products accoriding to the category
productRouter.get("/products/category/:category", getProductsByCategory);

module.exports = productRouter;

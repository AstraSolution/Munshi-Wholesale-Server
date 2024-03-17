const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
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

module.exports = productRouter;

const express = require('express');
const productRouter = express.Router();
const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct, getProductsByCategory, getProductsByBrand } = require("../controllers/ProductController")

// Add New Product
productRouter.post('/products', addProduct);

// Get All Products
productRouter.get('/products', getAllProducts);

// Get a product
productRouter.get('/products/:id', getProductById);

// Update Product Details
productRouter.put('/products/:id', updateProduct);

// Delete Product
productRouter.delete('/products/:id', deleteProduct);

// Find/query products according to the category
productRouter.get('/category/:category', getProductsByCategory);

// Find/query products according to the brand
productRouter.get('/brand/:brand', getProductsByBrand);

module.exports = productRouter;

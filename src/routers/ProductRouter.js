const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

// Add New Product
productRouter.post('/products', productController.addProduct);

// Get All Products
productRouter.get('/products', productController.getAllProducts);

// Get a product
productRouter.get('/products/:id', productController.getProductById);

// Update Product Details
productRouter.put('/products/:id', productController.updateProduct);

// Delete Product
productRouter.delete('/products/:id', productController.deleteProduct);

// Find/query products according to the category
productRouter.get('/category/:category', productController.getProductsByCategory);

// Find/query products according to the brand
productRouter.get('/brand/:brand', productController.getProductsByBrand);

module.exports = productRouter;

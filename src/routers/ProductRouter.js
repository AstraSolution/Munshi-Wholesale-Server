const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

// Add New Product
productRouter.post('/', productController.addProduct);

// Get All Products
productRouter.get('/', productController.getAllProducts);

// Get a product
productRouter.get('/:id', productController.getProductById);

// Update Product Details
productRouter.put('/:id', productController.updateProduct);

// Delete Product
productRouter.delete('/:id', productController.deleteProduct);

// Find/query products according to the category
productRouter.get('/category/:category', productController.getProductsByCategory);

// Find/query products according to the brand
productRouter.get('/brand/:brand', productController.getProductsByBrand);

module.exports = productRouter;

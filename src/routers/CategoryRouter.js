const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/CategoryCotroller');

// Add New Category
categoryRouter.post('/category', categoryController.addCategory);

// Get All Categories
categoryRouter.get('/category', categoryController.getAllCategories);

// Get a Category
categoryRouter.get('/category/:id', categoryController.getCategoryById);

// Update Category Details
categoryRouter.put('/category/:id', categoryController.updateCategory);

// Delete Category
categoryRouter.delete('/category/:id', categoryController.deleteCategory);

module.exports = categoryRouter;

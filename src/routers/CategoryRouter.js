const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryCotroller');

// Add New Category
router.post('/category', categoryController.addCategory);

// Get All Categories
router.get('/category', categoryController.getAllCategories);

// Get a Category
router.get('/category/:id', categoryController.getCategoryById);

// Update Category Details
router.put('/category/:id', categoryController.updateCategory);

// Delete Category
router.delete('/category/:id', categoryController.deleteCategory);

module.exports = router;

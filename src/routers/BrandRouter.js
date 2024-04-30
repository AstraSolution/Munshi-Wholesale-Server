const express = require('express');
const brandRouter = express.Router();
const brandController = require('../controllers/BrandController');

// Add New Brand
brandRouter.post('/brand', brandController.addBrand);

// Get All Brands
brandRouter.get('/brand', brandController.getAllBrands);

// Get a Brand
brandRouter.get('/brand/:id', brandController.getBrandById);

// Update Brand Details
brandRouter.put('/brand/:id', brandController.updateBrand);

// Delete Brand
brandRouter.delete('/brand/:id', brandController.deleteBrand);

module.exports = brandRouter;

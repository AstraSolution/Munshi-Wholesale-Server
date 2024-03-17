const express = require("express");
const { getAllBrands, getOneBrand, postBrand, updateBrand, deleteBrand } = require("../controllers/brandsControllers");

const brandsRoute = express.Router();


// get all brands
brandsRoute.get("/brands", getAllBrands);

// get one brand by id
brandsRoute.get("/brands/:id", getOneBrand);

// post a brand 
brandsRoute.post("/brands", postBrand);

// update a brand
brandsRoute.patch("/brands/:id", updateBrand);

// delete a brand
brandsRoute.delete("/brands/:id", deleteBrand);


module.exports = brandsRoute;





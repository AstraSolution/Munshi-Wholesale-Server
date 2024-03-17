const mongoose = require("mongoose");

const BrandsSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  brandImage: {
    type: String,
    required: true,
  },
  postDate: {
    type: String,
    default: Date.now()
  }
});

const Brands = mongoose.model("Brands", BrandsSchema);

module.exports = Brands;

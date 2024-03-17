const mongoose = require("mongoose");

const BrandsSchema = new mongoose.Schema({
  Brand_name: {
    type: String,
    required: true,
  },
  Brand_image: {
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

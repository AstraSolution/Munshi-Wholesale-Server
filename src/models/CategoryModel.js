const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  category_name: String,
  category_image: String,
});

const CategoryModel = mongoose.model("categories", DataSchema);

module.exports = CategoryModel;

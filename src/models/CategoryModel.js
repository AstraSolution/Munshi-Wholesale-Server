const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  categoryName: String,
  categoryImage: String,
});

const CategoryModel = mongoose.model("categories", DataSchema);

module.exports = CategoryModel;

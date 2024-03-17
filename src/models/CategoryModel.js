const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  category_name: {
    type: String,
    require: true,
  },
  category_image: {
    type: String,
  },
});

const CategoryModel = mongoose.model("categories", DataSchema);

module.exports = CategoryModel;

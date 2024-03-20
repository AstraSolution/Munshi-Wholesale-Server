const CategoryModel = require("../models/CategoryModel");

// get all category conttroller
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add new category controller
exports.createCategory = async (req, res) => {
  const { category_name, category_image } = req.body;
  try {
    const category = new CategoryModel({ category_name, category_image });
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get a category by id controller
exports.getCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a category by id controller
exports.updateCategoryById = async (req, res) => {
  const { category_name, category_image } = req.body;
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      { category_name, category_image },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a category by id controller
exports.deleteCategoryById = async (req, res) => {
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

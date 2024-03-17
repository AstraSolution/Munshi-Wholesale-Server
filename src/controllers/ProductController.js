const ProductsModel = require("../models/ProductsModel");


// get all product controller
exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create new product controller
exports.createProduct = async (req, res) => {
  const product = new ProductsModel(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get a single product by product id contorller
exports.getProductById = async (req, res) => {
  try {
    const product = await ProductsModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update product details contorrller
exports.updateProductById = async (req, res) => {
  try {
    const updatedProduct = await ProductsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a product by product id controller
exports.deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await ProductsModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

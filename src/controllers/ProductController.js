const ProductsModel = require("../models/ProductsModel");

// get all product controller
exports.getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;
  try {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalProduct = await ProductsModel.countDocuments()

    const pagination = {};
    if (endIndex < totalProduct) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    const aggregationPipline = [
      {
        $skip: startIndex,
      },
      {
        $limit: limit,
      },
    ];
    const products = await ProductsModel.aggregate(aggregationPipline);
    res.json(products);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: error.message });
  }
};


// get all product controller
exports.getProductForHomePage = async (req, res) => {
  try {
    const products = await ProductsModel.aggregate([
      { $sample: { size: 8 } }, // Shuffle and limit to 8 documents
    ]);
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

// get product by title controller
exports.getProductsByTitle = async (req, res) => {
  try {
    const title = new RegExp(req.params.title, "i");
    const products = await ProductsModel.find({ title });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get product by category controller
exports.getProductsByCategory = async (req, res) => {
  try {
    const category = new RegExp(req.params.category, "i");
    const products = await ProductsModel.find({ category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get product by brand controller
exports.getProductsByBrand = async (req, res) => {
  try {
    const brand = new RegExp(req.params.brand, "i");
    const products = await ProductsModel.find({ brand });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

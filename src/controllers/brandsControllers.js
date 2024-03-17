const Brands = require("../models/BrandMobel");

// get all brands controller
exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brands.find();
    res.send(brands);
  } catch (error) {
    console.error("Error getting brands data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get one brand controller
exports.getOneBrand = async (req, res) => {
  try {
    const brand = await Brands.findById(req.params.id);
    res.send(brand);
  } catch (error) {
    console.error("Error getting brand data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// post a brand controller
exports.postBrand = async (req, res) => {
    console.log("brand post...");
  try {
    const brand = req.body;
    const query = { brandName: brand.brandName };
    const existingBrand = await Brands.findOne(query);
    if (existingBrand) {
      return res.send({ message: "this brand already exists", insertedId: null });
    }
    const newBrand = new Brands(brand);
    const result = await newBrand.save();    
    res.send(result);
  } catch (error) {
    console.error("Error post a brand data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update a brand controller
exports.updateBrand = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Brands.findByIdAndUpdate(id, req.body, {new: true});
    res.send(result);
  } catch (error) {
    console.error("Error update a brand data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete a brand controller
exports.deleteBrand = async (req, res) => {
  try {
    const result = await Brands.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    console.error("Error delete a brand data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const Users = require("../models/UserModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (error) {
    console.error("Error getting all users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new Users(user);
    const result = await newUser.save();
    res.send(result);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
  
    const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updateUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserRoles = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await Users.findOne({ email }).select("isAdmin");
    res.send(user);
  } catch (error) {
    console.error("Error getting user roles:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

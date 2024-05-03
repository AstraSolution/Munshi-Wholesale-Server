const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  updateUserInterest,
  getUserRoles
} = require("../controllers/UserController");

const usersRoute = express.Router();

// usersRoute.get("/users", verifyToken, getAllUsers);
usersRoute.get("/users", getAllUsers);
usersRoute.get("/users/:email", verifyToken, getOneUser);
// usersRoute.post("/users", verifyToken, createUser);
usersRoute.post("/users", createUser);
usersRoute.patch("/users/:id", verifyToken, updateUser);
usersRoute.patch("/users-interest/:email", verifyToken, updateUserInterest);
usersRoute.get("/users/roles/:email", verifyToken, verifyAdmin, getUserRoles);

module.exports = usersRoute;

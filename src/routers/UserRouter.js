const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");
const userControllers = require('../controllers/UserController')

const usersRoute = express.Router();

// usersRoute.get("/users", verifyToken, userControllers.getAllUsers);
usersRoute.get("/users", userControllers.getAllUsers);
usersRoute.get("/users/:email", verifyToken, userControllers.getOneUser);
// usersRoute.post("/users", verifyToken, userControllers.createUser);
usersRoute.post("/users", userControllers.createUser);
usersRoute.patch("/users/:id", verifyToken, userControllers.updateUser);
usersRoute.get("/users/roles/:email", verifyToken, verifyAdmin, userControllers.getUserRoles);

module.exports = usersRoute;

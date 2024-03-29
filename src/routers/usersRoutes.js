const express = require("express");
const { getAllUsersController, getOneUserController, postUserController, updateUser } = require("../controllers/usersControllers");

const usersRoute = express.Router();

// get all users
usersRoute.get("/users",  getAllUsersController);

// get a user by id
usersRoute.get("/users/:email", getOneUserController);

// create a new user
usersRoute.post("/users", postUserController);

// update a user
usersRoute.patch("/users/:id", updateUser);


module.exports = usersRoute;

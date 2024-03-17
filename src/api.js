const express = require("express");
const usersRoute = require("./routers/usersRoutes");
const router = express.Router();

module.exports = router;


// users router
router.use(usersRoute)
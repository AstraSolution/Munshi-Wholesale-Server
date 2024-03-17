const express = require("express");
const usersRoute = require("./routers/usersRoutes");
const brandsRoute = require("./routers/brandsRoutes");
const jwtRoute = require("./routers/jwtRoute");
const router = express.Router();

module.exports = router;


// jwt router
router.use(jwtRoute);

// users router
router.use(usersRoute);

// brands router
router.use(brandsRoute)

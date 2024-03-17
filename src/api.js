const express = require("express");
const usersRoute = require("./routers/usersRoutes");
const brandsRoute = require("./routers/brandsRoutes");
const router = express.Router();

module.exports = router;


// users router
router.use(usersRoute);

// brands router
router.use(brandsRoute)

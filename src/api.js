const express = require("express");
const router = express.Router();

// Import all routers
const routers = [
  require("./routers/ProductRouter"),
  require("./routers/CategoryRouter"),
  require("./routers/usersRoutes"),
  require("./routers/brandsRoutes"),
  require("./routers/jwtRoute"),
  require("./routers/cartsRoutes"),
  require("./routers/wishlistRoutes"),
];

// Dynamically apply routers
routers.forEach((route) => router.use(route));

module.exports = router;

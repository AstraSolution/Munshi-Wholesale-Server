const express = require("express");
const router = express.Router();

// Import all routers
const routers = [

  require("./routers/ProductRouter"),
  require("./routers/cartsRoutes"),
  require("./routers/CategoryRouter"),
  require("./routers/BrandRouter"),
  require("./routers/UserRouter"),
   require("./routers/wishlistRoutes"),

];

// Dynamically apply routers
routers.forEach((route) => router.use(route));

module.exports = router;

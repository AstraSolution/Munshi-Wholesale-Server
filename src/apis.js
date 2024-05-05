const express = require("express");
const router = express.Router();

// Import all routers
const routers = [
<<<<<<< HEAD
=======

>>>>>>> bb2d320c4ddafea27486df22d8bfbdafd7afd717
  require("./routers/ProductRouter"),
  require("./routers/cartsRoutes"),
  require("./routers/wishlistRoutes"),
  require("./routers/CategoryRouter"),
  require("./routers/BrandRouter"),
<<<<<<< HEAD
=======
  require("./routers/UserRouter"),
   require("./routers/wishlistRoutes"),

>>>>>>> bb2d320c4ddafea27486df22d8bfbdafd7afd717
];

// Dynamically apply routers
routers.forEach((route) => router.use(route));

module.exports = router;

// const express = require("express");
// const router = express.Router();

// // Import all routers
// const routers = [
//   require("./routers/ProductRouter"),
//   require("./routers/CategoryRouter"),
//   require("./routers/usersRoutes"),
//   require("./routers/brandsRoutes"),
//   require("./routers/jwtRoute"),
//   require("./routers/cartsRoutes"),
//   require("./routers/wishlistRoutes")
// ];

// // Dynamically apply routers
// routers.forEach(route => router.use(route));

// module.exports = router;



const express = require("express");
const router = express.Router();

// Import all routers
const ProductRouter = require("./routers/ProductRouter");
const CategoryRouter = require("./routers/CategoryRouter");
const UsersRouter = require("./routers/usersRoutes");
const BrandsRouter = require("./routers/brandsRoutes");
const JwtRouter = require("./routers/jwtRoute");
const CartsRouter = require("./routers/cartsRoutes");
const WishlistRouter = require("./routers/wishlistRoutes");

// Dynamically apply routers
router.use(ProductRouter);
router.use(CategoryRouter);
router.use(UsersRouter);
router.use(BrandsRouter);
router.use(JwtRouter);
router.use(CartsRouter);
router.use(WishlistRouter);

module.exports = router;

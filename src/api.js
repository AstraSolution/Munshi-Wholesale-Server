const express = require("express");
const productRouter = require("./routers/ProductRouter");
const categoryRouter = require("./routers/CategoryRouter");
const usersRoute = require("./routers/usersRoutes");
const brandsRoute = require("./routers/brandsRoutes");
const jwtRoute = require("./routers/jwtRoute");
const cartsRouter = require("./routers/cartsRoutes");
const wishlistRouter = require("./routers/wishlistRoutes");
const router = express.Router();

// product router
router.use(productRouter);

// category router
router.use(categoryRouter);

// jwt router
router.use(jwtRoute);

// users router
router.use(usersRoute);

// brands router
router.use(brandsRoute);

// carts router
router.use(cartsRouter);

// wishlist router
router.use(wishlistRouter);



module.exports = router;

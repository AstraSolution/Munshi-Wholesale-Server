const express = require("express");
const router = express.Router();

// Import all routers
const routers = [
    require('./routers/ProductRouter'),
    require("./routers/cartsRoutes"),
    require("./routers/wishlistRoutes"),
    require('./routers/CategoryRouter'),
    require('./routers/BrandRouter'),
    require('./routers/OrdersRouter'),
    require('./routers/reviewsRoutes'),
];

// Dynamically apply routers
routers.forEach((route) => router.use(route));

module.exports = router;

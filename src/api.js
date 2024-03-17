const express = require("express");
const productRouter = require("./routers/ProductRouter");
const categoryRouter = require("./routers/CategoryRouter");
const router = express.Router();

// product router
router.use(productRouter);

// category router
router.use(categoryRouter);

module.exports = router;

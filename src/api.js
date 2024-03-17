const express = require("express");
const productRouter = require("./routers/ProductRouter");
const router = express.Router();

// product router
router.use(productRouter);

module.exports = router;

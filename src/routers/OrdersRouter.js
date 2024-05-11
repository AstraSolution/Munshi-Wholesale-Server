const express = require("express");
const {
  getMyOrders,
  getTotalProductsOrder,
  getTotalProductsSold,
  getTotalRevenue,
  getCustomers,
  getRecentTenOrder,
  getTodaysSalesAndOrders,
  getTopBrandsWithQuantity,
  getTopCategoriesWithQuantity,
  getTopPopularProducts,
} = require("../controllers/OrdersControllers");
const Orders = require("../models/OrdersModel");

const OrdersRouter = express.Router();

// get my orders by email
OrdersRouter.get("/my-orders/:email", getMyOrders);

// get total orders
OrdersRouter.get("/total-orders", getTotalProductsOrder);

// get total salse
OrdersRouter.get("/total-sales", getTotalProductsSold);

// get total revenue
OrdersRouter.get("/total-revenue", getTotalRevenue);

// get total customers
OrdersRouter.get("/customers", getCustomers);

// get total recent 10 order
OrdersRouter.get("/recentTenOrder", getRecentTenOrder);

// get total recent 10 order
OrdersRouter.get("/todaysSalesAndOrders", getTodaysSalesAndOrders);

// Get 5 top popular brands based on orders
OrdersRouter.get("/topPopularBrands", getTopBrandsWithQuantity);

// Get 5 top popular categories based on orders
OrdersRouter.get("/topPopularCategories", getTopCategoriesWithQuantity);

// Get 10 top popular products based on orders
OrdersRouter.get("/topPopularProducts", getTopPopularProducts);



module.exports = OrdersRouter;

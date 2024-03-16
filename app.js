const express = require("express");
const app = express();
const router = require("./src/api");
const morgan = require("morgan");

// security middleware import
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const limier = rateLimit({ windowMs: 60 * 60 * 1000, limit: 1000 });

// security middlware use
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());
app.use(limier);

app.use(morgan("dev"));

// api endpoints
app.use("/api/v1", router);

app.get("*", (req, res) => {
  res.status(401).json({ message: "Invalid URL" });
});

module.exports = app;

const express = require("express");
const app = express();
const router = require("./src/api");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// security middleware import
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const limier = rateLimit({ windowMs: 60 * 60 * 1000, limit: 1000 });
const cors = require("cors");
const corsOptions = {
  origin: ["*"],
  credentials: true,
  optionSuccessStatus: 200,
};

// security middlware use
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());
app.use(limier);

// non security middleware use
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

// all api endpoints
app.use("/api/v1", router);

// all api endpoints
app.use("/api/v1", router);

// home route
app.use("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Munshi-Wholesale Server" });
});

app.get("*", (req, res) => {
  res.status(401).json({ message: "Invalid URL" });
});

module.exports = app;

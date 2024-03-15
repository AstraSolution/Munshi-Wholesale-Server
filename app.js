const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/api");
const bodyParser = require("body-parser");

// security middleware import
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const limier = rateLimit({ windowMs: 60 * 60 * 1000, limit: 1000 });

// security middlware use
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());
app.use(limier);

app.use(bodyParser.json());

app.use("/api/v1", router);

module.exports = app;

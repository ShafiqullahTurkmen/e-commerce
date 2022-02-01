const express = require("express");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(express.json());

app.use("/api/vi", productRoute);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;

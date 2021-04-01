const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// API docs
app.get("/api", (req, res) => {
  fs.readFile("docs/apiDocs.json", (err, data) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    }
    const docs = JSON.parse(data);
    res.json(docs);
  });
});

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use(function (err, req, res, next) {
  const is404 = renderProps.routes.find((r) => r.status === 404) !== undefined;
  if (err.username === "UnauthorizedError") {
    res.status(401).json({
      error: "Unauthorized action - you must be logged in to do this.",
    });
  }
  if (is404) {
    res.status(404).json({
      error: "404 Not Found",
    });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Node JS listening on port: ${port}`);
});

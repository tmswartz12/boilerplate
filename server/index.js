const express = require("express");
const app = express();
const path = require("path");

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());

app.use("/api", require("./api")); // matches all requests to /api

//sends the one html page we have upon someone requesting the site
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

//in case anyone tries to load anything other than index.html
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

//for 404 errors
app.use(
  (req, res, next) =>
    path.extname(req.path).length > 0
      ? res.status(404).send("Not found")
      : next()
);

//for server errors
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;

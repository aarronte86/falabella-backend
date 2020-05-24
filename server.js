import express from "express";
import { json } from "body-parser";

var app = express();

app.use(json());

app.post("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});

import express from "express";
import { json } from "body-parser";

var app = express();

const cors = require("cors");
app.use(cors());
app.use(json());

app.post("/applications", function (req, res) {
  res.status(200).json({ status: "ok" });
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});

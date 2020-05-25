import express from "express";
import { json } from "body-parser";

import {
  processApplication,
  processApplicationValidators,
} from "./applications/processApplication";

var app = express();

const cors = require("cors");
app.use(cors());
app.use(json());

app.post("/applications", processApplicationValidators, processApplication);

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});

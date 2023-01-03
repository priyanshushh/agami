const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
const employe = require("./routes/employeeRoutes");
app.use("/api/v1", employe);
module.exports = app;

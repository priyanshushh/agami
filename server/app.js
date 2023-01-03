const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const employe = require("./routes/employeeRoutes");
app.use("/api/v1", employe);
module.exports = app;

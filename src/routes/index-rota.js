const express = require("express");
const rota = express.Router();

rota.get("/api", (req, res) => {
  res.status(200).send("Task API v.0.1.0");
});

module.exports = rota;

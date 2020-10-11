const express = require("express");
const rota = express.Router();

rota.get("/", (_, res) => {
  res.status(200).json({ erro: false, status: "Ok", info: "Task API v1.0.0" });
});

module.exports = rota;

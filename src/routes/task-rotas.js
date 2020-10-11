const express = require("express");
const rota = express.Router();
const taskController = require("../controller/TaskController");

rota.get("/", taskController.ObterTarefas);
rota.post("/", taskController.CriarTarefa);

module.exports = rota;

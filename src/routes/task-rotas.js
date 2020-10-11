const express = require("express");
const rota = express.Router();
const taskController = require("../controller/TaskController");
const taskMiddleware = require("../middleware/TaskMiddleware");

rota.get("/", taskController.ObterTarefas);
rota.post("/", taskMiddleware.HandlePost, taskController.CriarTarefa);
rota.put("/:id?", taskMiddleware.HandlePut, taskController.AtualizarTarefa);

module.exports = rota;

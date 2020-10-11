const express = require("express");
const rota = express.Router();
const taskController = require("../controller/TaskController");
const atualizarTarefaMiddleware = require("../middleware/AtualizarTarefaMiddleware");
const obterTarefasPorMacMiddleware = require("../middleware/ObterTodasAsTarefasPorMacMiddleware");
const criarTarefaMiddleware = require("../middleware/CriarNovaTarefaMiddleware");

rota.get("/filtro/todas", obterTarefasPorMacMiddleware.Handdle, taskController.ObterTarefas);
rota.post("/", criarTarefaMiddleware.Handdle, taskController.CriarTarefa);
rota.put("/:id?", atualizarTarefaMiddleware.Handdle, taskController.AtualizarTarefa);

module.exports = rota;

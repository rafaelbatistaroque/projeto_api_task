const express = require("express");
const rota = express.Router();
const taskController = require("../controller/TaskController");
const atualizarTarefaMiddleware = require("../middleware/AtualizarTarefaMiddleware");
const obterTarefasPorMacMiddleware = require("../middleware/ObterTodasAsTarefasPorMacMiddleware");
const criarTarefaMiddleware = require("../middleware/CriarNovaTarefaMiddleware");
const obterTarefaPorIdMiddleware = require("../middleware/ObterTarefaPorIdMiddleware");
const deletarTarefaPorIdMiddleware = require("../middleware/DeletarTarefaMiddleware");

rota.get("/filtro/todas", obterTarefasPorMacMiddleware.Handdle, taskController.ObterTarefas);
rota.post("/", criarTarefaMiddleware.Handdle, taskController.CriarTarefa);
rota
  .route("/:id?")
  .get(obterTarefaPorIdMiddleware.Handdle, taskController.ObterTarefaPorId)
  .put(atualizarTarefaMiddleware.Handdle, taskController.AtualizarTarefa)
  .delete(deletarTarefaPorIdMiddleware.Handdle, taskController.DeletarTarefa);

module.exports = rota;

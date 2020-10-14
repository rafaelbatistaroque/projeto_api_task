const express = require("express");
const rota = express.Router();
const taskController = require("../controller/TaskController");
const atualizarTarefaMiddleware = require("../middleware/task/AtualizarTarefaMiddleware");
const obterTarefasPorMacMiddleware = require("../middleware/task/ObterTodasAsTarefasPorMacMiddleware");
const criarTarefaMiddleware = require("../middleware/task/CriarNovaTarefaMiddleware");
const obterTarefaPorIdMiddleware = require("../middleware/task/ObterTarefaPorIdMiddleware");
const deletarTarefaPorIdMiddleware = require("../middleware/task/DeletarTarefaMiddleware");
const atualizarStatusTarefaMiddleware = require("../middleware/task/AtualizarStatusTarefaMiddleware");
const obterTarefasAtrasadasMiddleware = require("../middleware/task/ObterTarefasAtrasadasMiddleware");
const obterTarefasHojeMiddleware = require("../middleware/task/ObterTarefasHojeMiddleware");

rota.get("/filtro/todas", obterTarefasPorMacMiddleware.Handdle, taskController.ObterTarefas);
rota.get("/filtro/atrasadas", obterTarefasAtrasadasMiddleware.Handdle, taskController.ObterTarefasAtrasadas);
rota.get("/filtro/hoje", obterTarefasHojeMiddleware.Handdle, taskController.ObterTarefasHoje);
rota.post("/", criarTarefaMiddleware.Handdle, taskController.CriarTarefa);
rota.put("/mudar-status-tarefa/:id?", atualizarStatusTarefaMiddleware.Handdle, taskController.MudarStatusTarefa);
rota
  .route("/:id?")
  .get(obterTarefaPorIdMiddleware.Handdle, taskController.ObterTarefaPorId)
  .put(atualizarTarefaMiddleware.Handdle, taskController.AtualizarTarefa)
  .delete(deletarTarefaPorIdMiddleware.Handdle, taskController.DeletarTarefa);

module.exports = rota;

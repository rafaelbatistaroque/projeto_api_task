const express = require("express");
const rota = express.Router();
const taskController = require("../controller/TaskController");
const atualizarTarefaMiddleware = require("../middleware/task/AtualizarTarefaMiddleware");
const criarTarefaMiddleware = require("../middleware/task/CriarNovaTarefaMiddleware");
const obterTarefaPorIdMiddleware = require("../middleware/task/ObterTarefaPorIdMiddleware");
const deletarTarefaPorIdMiddleware = require("../middleware/task/DeletarTarefaMiddleware");
const atualizarStatusTarefaMiddleware = require("../middleware/task/AtualizarStatusTarefaMiddleware");
const obterTarefasFiltroMiddleware = require("../middleware/task/ObterTarefasFiltroMiddleware");

rota.get("/filtro/todas", obterTarefasFiltroMiddleware.Handdle, taskController.ObterTarefas);
rota.get("/filtro/atrasadas", obterTarefasFiltroMiddleware.Handdle, taskController.ObterTarefasAtrasadas);
rota.get("/filtro/hoje", obterTarefasFiltroMiddleware.Handdle, taskController.ObterTarefasHoje);
rota.get("/filtro/semana", obterTarefasFiltroMiddleware.Handdle, taskController.ObterTarefasSemana);
rota.post("/", criarTarefaMiddleware.Handdle, taskController.CriarTarefa);
rota.put("/mudar-status-tarefa/:id?", atualizarStatusTarefaMiddleware.Handdle, taskController.MudarStatusTarefa);
rota
  .route("/:id?")
  .get(obterTarefaPorIdMiddleware.Handdle, taskController.ObterTarefaPorId)
  .put(atualizarTarefaMiddleware.Handdle, taskController.AtualizarTarefa)
  .delete(deletarTarefaPorIdMiddleware.Handdle, taskController.DeletarTarefa);

module.exports = rota;

const express = require("express");
const rota = express.Router();
const taskController = require("../controller/TaskController");
const atualizarTarefaMiddleware = require("../middleware/task/AtualizarTarefaMiddleware");
const criarTarefaMiddleware = require("../middleware/task/CriarNovaTarefaMiddleware");
const obterTarefaPorIdMiddleware = require("../middleware/task/ObterTarefaPorIdMiddleware");
const deletarTarefaPorIdMiddleware = require("../middleware/task/DeletarTarefaMiddleware");
const atualizarStatusTarefaMiddleware = require("../middleware/task/AtualizarStatusTarefaMiddleware");
const obterTarefasFiltroMiddleware = require("../middleware/task/ObterTarefasFiltroMiddleware");

rota.get("/filtro/todas", obterTarefasFiltroMiddleware.Handdle, taskController.FiltroTarefasTodas);
rota.get("/filtro/atrasadas", obterTarefasFiltroMiddleware.Handdle, taskController.FiltroTarefasAtrasadas);
rota.get("/filtro/hoje", obterTarefasFiltroMiddleware.Handdle, taskController.FiltroTarefasHoje);
rota.get("/filtro/semana", obterTarefasFiltroMiddleware.Handdle, taskController.FiltroTarefasSemana);
rota.get("/filtro/mes", obterTarefasFiltroMiddleware.Handdle, taskController.FiltroTarefasMes);
rota.get("/filtro/ano", obterTarefasFiltroMiddleware.Handdle, taskController.FiltroTarefasAno);
rota.post("/", criarTarefaMiddleware.Handdle, taskController.CriarTarefa);
rota.put("/mudar-status-tarefa/:id?", atualizarStatusTarefaMiddleware.Handdle, taskController.MudarStatusTarefa);
rota
  .route("/:id?")
  .get(obterTarefaPorIdMiddleware.Handdle, taskController.ObterTarefaPorId)
  .put(atualizarTarefaMiddleware.Handdle, taskController.AtualizarTarefa)
  .delete(deletarTarefaPorIdMiddleware.Handdle, taskController.DeletarTarefa);

module.exports = rota;

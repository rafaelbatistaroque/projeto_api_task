const repositorio = require("../repositories/TaskRepository");

class TaskController {
  async ObterTarefas(req, res) {
    let { enderecomac } = req.body;
    try {
      let resposta = await repositorio.Obter(enderecomac);
      sucesso(200, res, resposta);
    } catch (error) {
      falha(res, error);
    }
  }

  async ObterTarefaPorId(req, res) {
    let { id } = req.params;
    console.log("passou");
    try {
      let resposta = await repositorio.ObterPorId(id);
      sucesso(200, res, resposta);
    } catch (error) {
      falha(res, error);
    }
  }

  async CriarTarefa(req, res) {
    try {
      await repositorio.Criar(req.body);
      sucesso(201, res, "Tarefa cadastrada com sucesso");
    } catch (error) {
      falha(res, error);
    }
  }

  async AtualizarTarefa(req, res) {
    let { id } = req.params;
    try {
      let tarefaAtualizada = await repositorio.Atualizar(id, req.body);
      sucesso(201, res, tarefaAtualizada);
    } catch (error) {
      falha(res, error);
    }
  }
}

function sucesso(code, res, data) {
  return res.status(code).json({ existeErro: false, data }).end();
}

function falha(resposta, e) {
  return resposta
    .status(500)
    .json({ existeErro: true, mensagem: "Falha ao processar sua requisição", info: e.message })
    .end();
}

module.exports = new TaskController();

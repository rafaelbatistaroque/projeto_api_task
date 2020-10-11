const repositorio = require("../repositories/TaskRepository");

class TaskController {
  async ObterTarefas(_, res) {
    try {
      let resposta = await repositorio.Obter();
      sucesso(res, resposta);
    } catch (error) {
      falha(res, error);
    }
  }

  async CriarTarefa(req, res) {
    try {
      await repositorio.Criar(req.body);
      sucesso(res, "Tarefa cadastrada com sucesso");
    } catch (error) {
      falha(res, error);
    }
  }

  async AtualizarTarefa(req, res) {
    let { id } = req.params;
    try {
      let tarefaAtualizada = await repositorio.Atualizar(id, req.body);
      sucesso(res, tarefaAtualizada);
    } catch (error) {
      falha(res, error);
    }
  }
}

function sucesso(res, data) {
  return res.status(200).json({ existeErro: false, data });
}

function falha(resposta, e) {
  return resposta
    .status(500)
    .json({ existeErro: true, mensagem: "Falha ao processar sua requisição", info: e.message });
}



module.exports = new TaskController();

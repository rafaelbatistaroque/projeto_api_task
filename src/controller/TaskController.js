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
}



function sucesso(res, mensagem) {
  res.status(200).json({ existeErro: false, mensagem });
}

function falha(resposta, e) {
  return resposta
    .status(500)
    .json({ existeErro: true, mensagem: "Falha ao processar sua requisição", info: e.message });
}



module.exports = new TaskController();

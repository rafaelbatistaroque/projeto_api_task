const repositorio = require("../repositories/TaskRepository");

class TaskController {
  async FiltroTarefasTodas(req, res) {
    let { enderecomac } = req.body;
    try {
      let tarefas = await repositorio.ObterTodas(enderecomac);
      sucesso(200, res, tarefas);
    } catch (error) {
      falha(res, error);
    }
  }

  async ObterTarefaPorId(req, res) {
    let { id } = req.params;
    let { enderecomac } = req.body;
    try {
      let tarefa = await repositorio.ObterPorId(id, enderecomac);
      sucesso(200, res, tarefa);
    } catch (error) {
      falha(res, error);
    }
  }

  async CriarTarefa(req, res) {
    try {
      let respostaTarefaCadastrada = await repositorio.Criar(req.body);
      sucesso(201, res, respostaTarefaCadastrada);
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

  async DeletarTarefa(req, res) {
    let { id } = req.params;
    let { enderecomac } = req.body;
    try {
      let tarefaDeletada = await repositorio.Deletar(id, enderecomac);
      sucesso(200, res, tarefaDeletada);
    } catch (error) {
      falha(res, error);
    }
  }

  async MudarStatusTarefa(req, res) {
    let { id } = req.params;
    try {
      let tarefaAtualizada = await repositorio.Atualizar(id, req.body);
      sucesso(200, res, tarefaAtualizada);
    } catch (error) {
      falha(res, error);
    }
  }

  async FiltroTarefasAtrasadas(req, res) {
    let { enderecomac } = req.body;
    try {
      let tarefasAtrasadas = await repositorio.ObterAtrasada(enderecomac);
      sucesso(200, res, tarefasAtrasadas);
    } catch (error) {
      falha(res, error);
    }
  }

  async FiltroTarefasHoje(req, res) {
    let { enderecomac } = req.body;
    try {
      let tarefasHoje = await repositorio.ObterPorHoje(enderecomac);
      sucesso(200, res, tarefasHoje);
    } catch (error) {
      falha(res, error);
    }
  }

  async FiltroTarefasSemana(req, res) {
    let { enderecomac } = req.body;
    try {
      let tarefasSemana = await repositorio.ObterPorSemana(enderecomac);
      sucesso(200, res, tarefasSemana);
    } catch (error) {
      falha(res, error);
    }
  }

  async FiltroTarefasMes(req, res) {
    let { enderecomac } = req.body;
    try {
      let tarefasDoMes = await repositorio.ObterPorMes(enderecomac);
      sucesso(200, res, tarefasDoMes);
    } catch (error) {
      falha(res, error);
    }
  }

  async FiltroTarefasAno(req, res) {
    let { enderecomac } = req.body;
    try {
      let tarefasDoAno = await repositorio.ObterPorAno(enderecomac);
      sucesso(200, res, tarefasDoAno);
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

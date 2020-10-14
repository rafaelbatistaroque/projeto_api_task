const repositorio = require("../repositories/TaskRepository");
const resposta = require("../shared/RespostasRequisicao");

class TaskController {
  async FiltroTarefasTodas(req, res) {
    let { enderecomac } = req.params;
    try {
      let tarefas = await repositorio.ObterTodas(enderecomac);
      resposta.Sucesso(200, res, tarefas);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async ObterTarefaPorId(req, res) {
    let { id } = req.params;
    let { enderecomac } = req.body;
    try {
      let tarefa = await repositorio.ObterPorId(id, enderecomac);
      resposta.Sucesso(200, res, tarefa);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async CriarTarefa(req, res) {
    try {
      let respostaTarefaCadastrada = await repositorio.Criar(req.body);
      resposta.Sucesso(201, res, respostaTarefaCadastrada);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async AtualizarTarefa(req, res) {
    let { id } = req.params;
    try {
      let tarefaAtualizada = await repositorio.Atualizar(id, req.body);
      resposta.Sucesso(201, res, tarefaAtualizada);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async DeletarTarefa(req, res) {
    let { id } = req.params;
    let { enderecomac } = req.body;
    try {
      let tarefaDeletada = await repositorio.Deletar(id, enderecomac);
      resposta.Sucesso(200, res, tarefaDeletada);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async MudarStatusTarefa(req, res) {
    let { id } = req.params;
    try {
      let tarefaAtualizada = await repositorio.Atualizar(id, req.body);
      resposta.Sucesso(200, res, tarefaAtualizada);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async FiltroTarefasAtrasadas(req, res) {
    let { enderecomac } = req.params;
    try {
      let tarefasAtrasadas = await repositorio.ObterAtrasada(enderecomac);
      resposta.Sucesso(200, res, tarefasAtrasadas);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async FiltroTarefasHoje(req, res) {
    let { enderecomac } = req.params;
    try {
      let tarefasHoje = await repositorio.ObterPorHoje(enderecomac);
      resposta.Sucesso(200, res, tarefasHoje);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async FiltroTarefasSemana(req, res) {
    let { enderecomac } = req.params;
    try {
      let tarefasSemana = await repositorio.ObterPorSemana(enderecomac);
      resposta.Sucesso(200, res, tarefasSemana);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async FiltroTarefasMes(req, res) {
    let { enderecomac } = req.params;
    try {
      let tarefasDoMes = await repositorio.ObterPorMes(enderecomac);
      resposta.Sucesso(200, res, tarefasDoMes);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }

  async FiltroTarefasAno(req, res) {
    let { enderecomac } = req.params;
    try {
      let tarefasDoAno = await repositorio.ObterPorAno(enderecomac);
      resposta.Sucesso(200, res, tarefasDoAno);
    } catch (error) {
      resposta.Falha(res, error);
    }
  }
}

module.exports = new TaskController();

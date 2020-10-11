const repositorio = require("../repositories/TaskRepository");
const validacao = require("../shared/fluent-validation");

class TaskController {
  async ObterTarefas(req, res) {
    try {
      let resposta = await repositorio.Obter();
      sucesso(res, resposta);
    } catch (error) {
      falha(res, error);
    }
  }

  async CriarTarefa(req, res) {
    if (validar(req).ehInvalido()) {
      naoAltorizada(res, validacao.obterErros());
      return validacao.LimparErros();
    }

    try {
      await repositorio.Criar(req.body);
      sucesso(res, "Tarefa cadastrada com sucesso");
    } catch (error) {
      validacao.LimparErros();
      falha(res, error);
    }
  }
}

function validar(req) {
  return validacao
    .ehRequerido(req.body.enderecomac, "Endereço MAC é requerido")
    .ehRequerido(req.body.tipo, "Tipo de tarefa é requerido")
    .ehRequerido(req.body.titulo, "O título é requerido.")
    .ehMenorQue(req.body.titulo, 3, "O título deve ter no mínimo 3 caracteres.")
    .ehRequerido(req.body.descricao, "Descrição é requerida")
    .ehMenorQue(req.body.descricao, 3, "A descrição deve ter no mínimo 3 caracteres.")
    .ehRequerido(req.body.quando, "Data é requerida");
}

function sucesso(res, mensagem) {
  res.status(200).json({ erro: false, mensagem });
}

function falha(resposta, e) {
  return resposta.status(500).send({
    erro: true,
    mensagem: "Falha ao processar sua requisição",
    erro: e.message,
  });
}

function naoAltorizada(res, mensagem) {
  res.status(403).json({ erro: true, mensagem }).end();
}

module.exports = new TaskController();

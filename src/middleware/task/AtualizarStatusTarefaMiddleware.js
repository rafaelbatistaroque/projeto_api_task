const validacao = require("../../shared/Validacao");
const resposta = require("../../shared/RespostasRequisicao");

class AtualizarStatusTarefaMiddleware {
  async Handdle(req, res, next) {
    let { id } = req.params;
    let { enderecomac, feito } = req.body;

    validacao
      .EhRequerido(id, "Está faltando parâmetro para localizar a tarefa")
      .EhRequerido(enderecomac, "Endereço MAC é requerido")
      .EhRequerido(feito, "O status da tarefa é requerido")
      .EhTipoBoolean(feito, "O tipo do status da tarefa deve ser booleano");

    if (validacao.EhInvalido) {
      resposta.NaoAutorizada(res, validacao.Erros);
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

module.exports = new AtualizarStatusTarefaMiddleware();

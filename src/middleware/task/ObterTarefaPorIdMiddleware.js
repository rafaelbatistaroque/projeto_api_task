const validacao = require("../../shared/Validacao");
const resposta = require("../../shared/RespostasRequisicao");

class ObterTarefaPorIdMiddleware {
  async Handdle(req, res, next) {
    let { id } = req.params;
    let { enderecomac } = req.body;

    validacao
      .EhRequerido(id, "Está faltando parâmetro para localizar a tarefa")
      .EhRequerido(enderecomac, "Endereço MAC é requerido");

    if (validacao.EhInvalido) {
      resposta.NaoAutorizada(res, validacao.Erros);
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

module.exports = new ObterTarefaPorIdMiddleware();

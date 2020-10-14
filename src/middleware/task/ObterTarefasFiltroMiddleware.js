const validacao = require("../../shared/Validacao");
const resposta = require("../../shared/RespostasRequisicao");

class obterTarefasFiltroMiddleware {
  async Handdle(req, res, next) {
    let { enderecomac } = req.params;

    validacao.EhRequerido(enderecomac, "Endereço MAC é requerido no parâmetro");

    if (validacao.EhInvalido) {
      resposta.NaoAutorizada(res, validacao.Erros);
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

module.exports = new obterTarefasFiltroMiddleware();

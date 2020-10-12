const validacao = require("../shared/Validacao");

class ObterTarefaPorIdMiddleware {
  async Handdle(req, res, next) {
    if (validarParams(req).EhInvalido) {
      naoAltorizada(res, validacao.Erros);
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

function validarParams(req) {
  let { id } = req.params;
  return validacao.EhRequerido(id, "Está faltando parâmentro para localizar a tarefa");
}

function naoAltorizada(res, erros) {
  return res.status(403).json({ existeErro: true, erros }).end();
}

module.exports = new ObterTarefaPorIdMiddleware();

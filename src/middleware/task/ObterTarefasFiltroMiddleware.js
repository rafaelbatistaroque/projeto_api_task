const validacao = require("../../shared/Validacao");

class obterTarefasFiltroMiddleware {
  async Handdle(req, res, next) {
    if (validarBody(req).EhInvalido) {
      naoAltorizada(res, validacao.Erros);
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

function validarBody(req) {
  let { enderecomac } = req.body;

  return validacao.EhRequerido(enderecomac, "Endereço MAC é requerido");
}

function naoAltorizada(res, erros) {
  return res.status(403).json({ existeErro: true, erros }).end();
}

module.exports = new obterTarefasFiltroMiddleware();

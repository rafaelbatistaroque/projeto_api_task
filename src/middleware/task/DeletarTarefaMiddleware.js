const validacao = require("../../shared/Validacao");

class DeletarTarefaMiddleware {
  async Handdle(req, res, next) {
    if (validarParams(req).EhInvalido || validarBody(req).EhInvalido) {
      naoAltorizada(res, validacao.Erros);
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

function validarParams(req) {
  let { id } = req.params;
  
  return validacao.EhRequerido(id, "Está faltando parâmetro para localizar a tarefa");
}

function validarBody(req) {
  let { enderecomac } = req.body;

  return validacao.EhRequerido(enderecomac, "Endereço MAC é requerido");
}

function naoAltorizada(res, erros) {
  return res.status(403).json({ existeErro: true, erros }).end();
}

module.exports = new DeletarTarefaMiddleware();

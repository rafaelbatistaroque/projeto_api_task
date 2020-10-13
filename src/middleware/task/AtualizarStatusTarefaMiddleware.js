const validacao = require("../../shared/Validacao");

class AtualizarStatusTarefaMiddleware {
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
  return validacao.EhRequerido(id, "Está faltando parâmentro para localizar a tarefa");
}

function validarBody(req) {
  let { enderecomac, feito } = req.body;

  return validacao
    .EhRequerido(enderecomac, "Endereço MAC é requerido")
    .EhRequerido(feito, "O status da tarefa é requerido")
    .EhTipoBoolean(feito, "O tipo do status da tarefa deve ser booleano");
}

function naoAltorizada(res, erros) {
  return res.status(403).json({ existeErro: true, erros }).end();
}

module.exports = new AtualizarStatusTarefaMiddleware();
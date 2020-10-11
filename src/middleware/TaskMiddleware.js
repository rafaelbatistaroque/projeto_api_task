const validacao = require("../shared/Validacao");

class TaskMiddleware {
  async HandlePost(req, res, next) {
    if (validar(req).EhInvalido()) {
      naoAltorizada(res, validacao.ObterErros());
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

function validar(req) {
  let { enderecomac, tipo, titulo, descricao, quando } = req.body;

  return validacao
    .EhRequerido(enderecomac, "Endereço MAC é requerido")
    .EhRequerido(tipo, "Tipo de tarefa é requerido")
    .EhRequerido(titulo, "O título é requerido.")
    .EhMenorQue(titulo, 3, "O título deve ter no mínimo 3 caracteres.")
    .EhRequerido(descricao, "Descrição é requerida")
    .EhMenorQue(descricao, 3, "A descrição deve ter no mínimo 3 caracteres.")
    .EhRequerido(quando, "Data é requerida")
    .EhTipoData(quando, "A data adicionada é inválida")
    .EhDataPassado(quando, "A data adicionada não pode ser no passado.");
}

function naoAltorizada(res, erros) {
  return res.status(403).json({ existeErro: true, erros }).end();
}

module.exports = new TaskMiddleware();

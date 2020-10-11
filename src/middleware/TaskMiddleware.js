const validacao = require("../shared/Validacao");

class TaskMiddleware {
  async HandlePost(req, res, next) {
    if (validar(req).ehInvalido()) {
      naoAltorizada(res, validacao.obterErros());
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

function validar(req) {
  let { enderecomac, tipo, titulo, descricao, quando } = req.body;

  return validacao
    .ehRequerido(enderecomac, "Endereço MAC é requerido")
    .ehRequerido(tipo, "Tipo de tarefa é requerido")
    .ehRequerido(titulo, "O título é requerido.")
    .ehMenorQue(titulo, 3, "O título deve ter no mínimo 3 caracteres.")
    .ehRequerido(descricao, "Descrição é requerida")
    .ehMenorQue(descricao, 3, "A descrição deve ter no mínimo 3 caracteres.")
    .ehRequerido(quando, "Data é requerida");
}

function naoAltorizada(res, erros) {
  return res.status(403).json({ existeErro: true, erros }).end();
}

module.exports = new TaskMiddleware();

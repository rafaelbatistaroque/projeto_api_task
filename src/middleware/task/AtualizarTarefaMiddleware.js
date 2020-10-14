const validacao = require("../../shared/Validacao");
const resposta = require("../../shared/RespostasRequisicao");

class AtualizarTarefaMiddleware {
  async Handdle(req, res, next) {
    let { id } = req.params;
    let { enderecomac, tipo, titulo, descricao, quando } = req.body;

    validacao
      .EhRequerido(id, "O parâmetro que identifica a tarefa não existe")
      .EhRequerido(enderecomac, "Endereço MAC é requerido")
      .EhRequerido(tipo, "Tipo de tarefa é requerido")
      .EhRequerido(titulo, "O título é requerido.")
      .EhMenorQue(titulo, 3, "O título deve ter no mínimo 3 caracteres.")
      .EhRequerido(descricao, "Descrição é requerida")
      .EhMenorQue(descricao, 3, "A descrição deve ter no mínimo 3 caracteres.")
      .EhRequerido(quando, "Data é requerida")
      .EhTipoData(quando, "A data adicionada é inválida")
      .EhDataPassado(quando, "A data adicionada não pode ser no passado.");

    if (validacao.EhInvalido) {
      resposta.NaoAutorizada(res, validacao.Erros);
      return validacao.LimparErros();
    }

    validacao.LimparErros();
    return next();
  }
}

module.exports = new AtualizarTarefaMiddleware();

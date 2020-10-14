class RespostasRequisicao {
  Sucesso(code, res, data) {
    return res.status(code).json({ existeErro: false, data }).end();
  }

  Falha(resposta, erro) {
    return resposta
      .status(500)
      .json({ existeErro: true, mensagem: "Falha ao processar sua requisição", info: erro.message })
      .end();
  }

  NaoAutorizada(res, erros) {
    return res.status(403).json({ existeErro: true, erros }).end();
  }
}

module.exports = new RespostasRequisicao();

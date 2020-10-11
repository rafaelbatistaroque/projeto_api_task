class Validacao {
  #erros;

  constructor() {
    this.#erros = [];
  }

  ehRequerido(valor, mensagem) {
    if (!valor || valor.length <= 0) this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  ehMenorQue(valor, min, mensagem) {
    if (!valor || valor.length < min) this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  ehMaiorQue(valor, max, mensagem) {
    if (!valor || valor.length > max) this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  deveSerIgual(valor, len, mensagem) {
    if (valor.length !== len) this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  ehMail(valor, mensagem) {
    let reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(valor)) this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  adicionarErro(mensagem) {
    this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  naoEhNumero(valor, mensagem) {
    if (!Number.isInteger(valor)) this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  obterErros() {
    return this.#erros;
  }

  LimparErros() {
    this.#erros = [];

    return this;
  }

  ehValido() {
    return this.#erros.length === 0;
  }

  ehInvalido() {
    return this.#erros.length > 0;
  }
}

const gerarId = () => Math.floor(Math.random() * 1000) + 1;

module.exports = new Validacao();

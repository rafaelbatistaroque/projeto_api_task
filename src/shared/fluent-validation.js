class Validacao {
  #erros;

  constructor() {
    this.#erros = [];
  }

  ehRequerido(value, mensagem) {
    if (!value || value.length <= 0)
      this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  ehMenorQue(value, min, mensagem) {
    if (!value || value.length < min)
      this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  ehMaiorQue(value, max, mensagem) {
    if (!value || value.length > max)
      this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  deveSerIgual(value, len, mensagem) {
    if (value.length !== len) this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  ehMail(value, mensagem) {
    let reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value)) this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  adicionarErro(mensagem) {
    this.#erros.push({ id: gerarId(), mensagem });

    return this;
  }

  naoEhNumero(value, mensagem) {
    if (!Number.isInteger(value)) this.#erros.push({ id: gerarId(), mensagem });

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

const mongoose = require("mongoose");
const Tarefa = mongoose.model("Task");

class TaskRepository {
  async Criar(novaTarefa) {
    let tarefa = new Tarefa(novaTarefa);
    await tarefa.save();
  }

  async Obter(enderecomac) {
    let existe = await Tarefa.exists({ enderecomac: enderecomac });

    if (!existe) return "Nenhum registro encontrado";

    return await Tarefa.find({ enderecomac: { $in: enderecomac } }, "titulo feito quando descricao").sort("quando");
  }

  async ObterPorId(id, enderecomac) {
    let existe = await Tarefa.exists({ _id: id, enderecomac: enderecomac });

    if (!existe) return "Nenhum registro encontrado";

    return await Tarefa.findById(id, "titulo feito quando descricao");
  }

  async Atualizar(id, tarefa) {
    return await Tarefa.findByIdAndUpdate({ _id: id }, tarefa, { new: true });
  }
  // async Deletar();
}

module.exports = new TaskRepository();

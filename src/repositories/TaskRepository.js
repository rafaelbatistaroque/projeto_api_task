const mongoose = require("mongoose");
const Tarefa = mongoose.model("Task");

class TaskRepository {
  async Criar(novaTarefa) {
    let tarefa = new Tarefa(novaTarefa);
    await tarefa.save();
  }

  async Obter() {
    return await Tarefa.find({}, "titulo feito quando descricao");
  }

  async Atualizar(id, tarefa) {
    return await Tarefa.findByIdAndUpdate({ _id: id }, tarefa, { new: true });
  }
  // async Deletar();
}

module.exports = new TaskRepository();

const mongoose = require("mongoose");
const Tarefa = mongoose.model("Task");
const diaAtual = new Date(new Date().setHours(-4,0,0,0));

const { startOfDay, endOfDay } = require("date-fns");

class TaskRepository {
  async Criar(novaTarefa) {
    let tarefa = new Tarefa(novaTarefa);
    await tarefa.save();
    return "Tarefa cadastrada com sucesso";
  }

  async Obter(enderecomac) {
    return await Tarefa.find({ enderecomac: { $in: enderecomac } }, "titulo feito quando descricao").sort("quando");
  }

  async ObterPorId(id, enderecomac) {
    return await Tarefa.findOne({ _id: id, enderecomac: enderecomac }, "titulo feito quando descricao");
  }

  async ObterAtrasadas(enderecomac) {
    return await Tarefa.find({ quando: { $lt: diaAtual }, enderecomac: enderecomac }).sort("quando");
  }

  async Obterhoje(enderecomac) {
    return await Tarefa.find({ quando: { $gte: startOfDay(diaAtual), $lt: endOfDay(diaAtual) }, enderecomac: enderecomac }).sort("quando");
  }

  async Atualizar(id, tarefa) {
    let existe = await Tarefa.exists({ _id: id, enderecomac: tarefa.enderecomac });

    if (!existe) return "Nenhum registro encontrado";

    return await Tarefa.findByIdAndUpdate({ _id: id }, tarefa, { new: true });
  }

  async Deletar(id, enderecomac) {
    let existe = await Tarefa.exists({ _id: id, enderecomac: enderecomac });

    if (!existe) return "Nenhum registro encontrado";

    await Tarefa.deleteOne({ _id: id, enderecomac: enderecomac });
    return "Registro deletado com sucesso";
  }
}

module.exports = new TaskRepository();

const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  enderecomac: { type: String, required: true },
  tipo: { type: Number, required: true },
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  quando: { type: Date, required: true },
  feito: { type: Boolean, default: false },
  criadoem: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Task", TaskSchema);

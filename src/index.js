const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/database");
const app = express();

app.use(express.json());

//Models
require("./model/TaskModel");

//Database
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.connect(config.connectionStringLocal);

//Rotas
const indexRoute = require("./routes/index-rota");
const taskRoutes = require("./routes/task-rotas");

//CORS
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use("/api/v1/", indexRoute);
app.use("/api/v1/task", taskRoutes);

module.exports = app;

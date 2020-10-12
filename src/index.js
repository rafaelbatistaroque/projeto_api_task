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

app.use("/api/v1/", indexRoute);
app.use("/api/v1/task", taskRoutes);

// module.exports = app;

app.listen(3000, () => {
  console.log("API online");
});

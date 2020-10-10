const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/task-db";
mongoose.connect(connectionString);
mongoose.set("useNewUrlParser", true);

module.exports = mongoose;

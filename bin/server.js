const app = require("../src/index");
const http = require("http");
const debug = require("debug")("nodestr:server");

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log("API online"));
server.on("erro", onError);
server.on("listening", onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") throw error;

  let bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  let typeError = {
    EACCES: () => {
      console.error(`${bind} requer permissão admin`);
      process.exit(1);
    },
    EADDRINUSE: () => {
      console.error(`${bind} já está em uso`);
      process.exit(1);
    },
  };

  if (typeError.hasOwnProperty(error.code)) return typeError[error.code];

  throw error;
}

function onListening() {
  let addr = server.address();
  let bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  debug(`Listening on ${bind}`);
}

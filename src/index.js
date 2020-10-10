const express = require('express')
const server = express();

server.get('/api', (req, res) => {
  res.send("Task API v.0.1");
})


server.listen(3000, () => {
  console.log("API online");
});
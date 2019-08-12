const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const generate_prices = require('../src/util/mock/prices_generator');
const get_noms_prices = require('./noms');

const port = 4242;
const app = express();
const server = http.createServer(app);

const io = socketIo(server);

const getPricesAndEmit = socket => {
  try {
    const res = JSON.stringify(generate_prices('XYZ'));
    socket.emit("prices-API", res);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

const getNomsPricesAndEmit = socket => {
  get_noms_prices().then(data => {
    // console.log(data);
    const res = JSON.stringify(data);
    try {
      socket.emit("prices-API", res);
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  });
};



io.on("connection", socket => {
  console.log("New client connected");
  getNomsPricesAndEmit(socket);
  setInterval(() => getNomsPricesAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});
  
server.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const generate_prices = require('../src/util/mock/prices_generator');

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

io.on("connection", socket => {
  console.log("New client connected");
  getPricesAndEmit(socket);
  setInterval(() => getPricesAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});
  
server.listen(port, () => console.log(`Listening on port ${port}`));

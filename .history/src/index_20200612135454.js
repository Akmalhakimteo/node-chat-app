const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const Filter = require("bad-words");

const {generateMessage} =  require('./utils/messages')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// let count = 0;

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.emit("message", {
      text: 'Welcome',
      createdAt: new Date().getTime()
  });

  socket.broadcast.emit("message", "A new user has joined!");

  socket.on("sendMessage", (message, callback) => {
    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callback("Profanity is not allowed!");
    }

    io.emit("message", message);
    callback();
  });

  socket.on("sendLocation", (position, callback) => {
    io.emit(
      "locationMessage",
      `https://google.com/maps?q=${position.latitude},${position.longitude}`
    );
    callback();
  });

  socket.on("disconnect", () => {
    io.emit("message", "A user has left");
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

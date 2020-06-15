const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const Filter = require("bad-words");
const {addUser,removeUser,getUser, getUsersInRoom} = require('./utils/users')

const {generateMessage , generateLocationMessage} =  require('./utils/messages')


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// let count = 0;

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.on('join',({username,room},callback)=>{
      const {error, user} = addUser({id: socket.id, username,room})
      if(error){
        
      }
      


      socket.join(room)
      socket.emit("message", generateMessage('Welcome'));
      socket.broadcast.to(room).emit("message", generateMessage(`${username} has joined!`));

      //socket.emit, io.emit, socket.broadcast.emit -- without rooms
      // WITH rooms - io.to.emit, socket.broadcast.to.emit

  })

  socket.on("sendMessage", (message, callback) => {
    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callback("Profanity is not allowed!");
    }

    io.to('Tampines').emit("message", generateMessage(message));
    callback();
  });

  socket.on("sendLocation", (position, callback) => {
    io.emit(
      "locationMessage",
      generateLocationMessage(`https://google.com/maps?q=${position.latitude},${position.longitude}`)
    );
    callback();
  });

  socket.on("disconnect", () => {
    io.emit("message", generateMessage("A user has left"));
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

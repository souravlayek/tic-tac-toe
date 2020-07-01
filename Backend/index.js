const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = socketio(server);

const PORT = 8001;
server.listen(PORT, () => console.log("server is running"));

//new websocket connection
io.on("connection", (socket) => {
  console.log("new connection established... ", socket.id);
  socket.on("joinroom", (data) => {
    const values = data;
    const roomNo = values.data.room;
    socket.join(roomNo);
    io.to(roomNo).emit("updateplayer", {
      name: values.data.name,
      player: values.player,
    });
  });
});

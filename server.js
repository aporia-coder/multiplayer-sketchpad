const express = require("express");
const socket = require("socket.io");
const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

app.use(express.static(__dirname + "/public"));

const io = socket(server);
io.sockets.on("connection", (socket) => {
  console.log("Socket connection has been achieved");
  socket.on("mouse", (data) => {
    console.log(data);
    socket.broadcast.emit("mouse", data);
  });
});

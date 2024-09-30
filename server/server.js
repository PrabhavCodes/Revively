const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", 
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('joinroom',(room)=>{
        socket.join(room);
        console.log(`User has joined room ${room}`);
    });

    socket.on('sendMessage',(msg)=>{
        console.log('recived message',msg);

        io.to(msg.room).emit('message',{
            user:socket.id,
            text:msg.message
        });
    });


    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
var express = require("express");

var app = express(),
    server = require("http").createServer(app),
    io = require("socket.io").listen(server);

var userNumber = 0;

io.sockets.on('connection',function(socket){
    
    var signIn = false;
    socket.on('signIn',function(userName){
        if (signIn) return;
        console.log("signIn",userName);
        socket.userName = userName;
        userNumber++;
        signIn = true;
        io.sockets.emit('userJoined',{
            userName:userName,
            userNumber:userNumber});
    });
    
    socket.on("newMessage",function(data){
        console.log(data.userName,data.message);
        io.sockets.emit("newMessage",{
            userName:data.userName,
            text:data.message
        });
    });
    
    socket.on('disconnect',function(){
       if (signIn) {
           userNumber--;
           io.sockets.emit('userLeft',{
              userName:socket.userName,
              userNumber:userNumber
           });
       } 
    });
});





server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
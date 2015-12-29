var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.port || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

app.get('/teal', function(req, res){
  res.send('<div>cool</div>');
  io.emit('teal-score', { for: 'everyone' });
});

http.listen(port, function(){
  console.log('listening on *:' +  port);
});
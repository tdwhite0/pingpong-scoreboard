/// <reference path="typings/tsd.d.ts" />

import express = require('express');
import http = require('http');
import io = require('socket.io');
import path = require("path");

import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');


let port = process.env.port || 3000;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let server = http.createServer(app);
let socketio = io(http).listen(server);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/server/index.html');
});

app.get('/one', function (req: express.Request, res: express.Response) {
    res.sendStatus(200);
    socketio.emit('one', { for: 'everyone' });
});

app.get('/one-down', function (req, res) {
    res.sendStatus(200);
    socketio.emit('one-down', { for: 'everyone' });
});

app.get('/two', function (req, res) {
    res.sendStatus(200);
    socketio.emit('two', { for: 'everyone' });
});

app.get('/two-down', function (req, res) {
    res.sendStatus(200);
    socketio.emit('two-down', { for: 'everyone' });
});

server.listen(port);
console.log('This express app is listening on %s', port);


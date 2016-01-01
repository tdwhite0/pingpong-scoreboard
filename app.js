/// <reference path="./typings/tsd.d.ts" />
define(["require", "exports", 'express', 'http', 'socket.io', "path", 'cookie-parser', 'body-parser'], function (require, exports, express, http, io, path, cookieParser, bodyParser) {
    var port = process.env.port || 3000;
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    var server = http.createServer(app);
    var socketio = io(http).listen(server);
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/server/index.html');
    });
    app.get('/one', function (req, res) {
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
    app.get('/log', function (req, res) {
        res.sendStatus(200);
    });
    app.post('/log', function (req, res) {
        res.send(200, JSON.stringify(req));
    });
    server.listen(port);
    console.log('This express app is listening on %s', port);
});
//# sourceMappingURL=app.js.map
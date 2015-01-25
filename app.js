var PORT       = 4000;
var app        = require('express')();
var bodyParser = require('body-parser');
var io         = require('socket.io').listen(app.listen(PORT));

app.use(bodyParser.urlencoded({ extended: true }));

// WEB SERVICE
/////////


// event, message
app.get('/', function(req, res) {
   res.sendFile(__dirname + '/client.html');
});

app.post('/new_event', function(req, res){
    var event = req.body.event;
    var message = req.body.message;
    console.log('new event : ' + event);
    console.log('message : ' + message);
    io.emit(event, message);
    res.end('OK');
});
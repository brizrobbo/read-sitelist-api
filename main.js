var express = require('express');
var bodyParser = require('body-parser')

var getTheseFiles = require('./getListFiles.js');

var app = express();

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('<p>This service only allows POST requests.</p>');
});

app.post('/', function (req, res) {

    var incomingUrl = req.body["site"];

    getTheseFiles.getFiles(incomingUrl, function listMyFiles() {
        var postSuccessResp = {
            "result": "success"
        };
        res.send(postSuccessResp);
        //console.log(postSuccessResp);
    });

});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('loadorphandb app listening at http://%s:%s', host, port);
});
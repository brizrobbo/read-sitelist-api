var exports = module.exports = {};

var request = require('request');

exports.getFiles = function (incomingUrl, callback) {

    request.get(incomingUrl, function doneGetting(error, response, body) {

        if (error) {
            return console.log('Error:', error);
        }

        //Check for right status code
        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }

        listOfFiles = JSON.parse(response.body);

        listOfFiles.forEach(function (entry) {
            console.log(entry);
        });

        callback();
    });

    return;
};
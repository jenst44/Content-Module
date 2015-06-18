// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var static_contents = require('./static.js');

var server = http.createServer(function (request, response){
    // console.log('client request URL: ', request.url);
    static_contents(request, response);
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
//node js

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<b>Hello World</b>")    
    res.write("<b>I am the server</b>")
    res.end("Bye bye")    
}).listen(3000);

console.log("Server startrd on http://127.0.0.1:3000")
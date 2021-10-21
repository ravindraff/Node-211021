let express = require('express');
let http = require('http');
let server = http.createServer((req, res) => {
    res.WriteHead(200,{contentType: 'text/html'});
    res.write("Welcome");
    res.end();
})
server.listen(5050);
console.log("Server listening on 5050")
// HTTP MODULE
const http = require('http');

// note:----- both of the parameter int the callback are objects 
// first parameter 'req':----------> represent the incoming request 


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page");
    }
    if (req.url === '/about') {
        res.end("Here is our short history");
    } else {
        res.end(`<h1>Opps!</h1>
    <p> We cann't seem to find the page you are looking for </p>
    <a href="/">Back To home Page</a>`);
    }


})

server.listen(5000);
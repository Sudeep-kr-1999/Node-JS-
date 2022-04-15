const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Homepage");
    }

    if (req.url === '/about') {

        //BLOCKING CODE!!!
        // due to this no any end point will work fine until it execute 
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end("About Page");
    }

    res.end("Error page");
});

server.listen(5000, () => {
    console.log('server is listening on port 5000..');
})
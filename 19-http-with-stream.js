const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big1.txt', 'utf-8');
    // res.end(text);

    const filestream = fs.createReadStream('./content/big.txt', { encoding: 'utf8' });
    filestream.on('open', () => {

        // .pipe() make ReadStream to the WriteStream and the argument take where to write 
        filestream.pipe(res);

    })
    filestream.on('error', () => {
        res.end(error)
    })
}).listen(5000);
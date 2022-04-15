const { createReadStream } = require('fs');
// const stream = createReadStream('./content/big.txt');

// default: 64 kb
// last buffer: remainder
// highWaterMark: control size of the stream 

// const stream = createReadStream('./content/big.txt', { highWaterMark: 9000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf-8' });
const stream = createReadStream('./content/big.txt', { highWaterMark: 9000, encoding: 'utf-8' });



stream.on('data', (result) => {
    console.log(result);
})

// to check the error 
stream.on('error', (error) => {
    console.log(error);
})
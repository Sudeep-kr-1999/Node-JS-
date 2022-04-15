// Streams in Node js 

// 1. Writable :
// 2. Readable
// 3. Duplex
// 4. Transform

// Note:--- Streams extend EventEmitter

const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {

    //  since file is too big so we get the data in chunks (parts) its give a Buffer 
    console.log(result);
})

// Note:---- by default the size of the chunk is 64 kilobytes
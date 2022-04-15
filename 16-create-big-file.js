const { writeFileSync, writeFile } = require('fs');

// for big.txt 
// for (let i = 0; i < 1000; i++) {
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }


// big1.txt
for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big1.txt', `hello world ${i}\n`, { flag: 'a' })
}
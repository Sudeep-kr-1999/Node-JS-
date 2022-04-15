// asynchronous:----- non blocking approach
// synchronous :-- blocking approach

const { readFileSync, writeFileSync, readFile, write } = require('fs');
console.log("start");
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(`The content from the first file is : `, first);
console.log(`The content from the second file is : `, second);


// if the file is not there it will create and if the file is there node by default override the value there 
// writeFileSync('./content/third.txt', `Here is the result : ${first} and ${second} from first and second file `);


// if we want to append data to the file 
writeFileSync('./content/third.txt', `\n Here is the result : ${first} and ${second} from first and second file `, { flag: 'a' });

console.log("done with this task");
console.log("starting the next one");
const path = require('path');
// console.log(path);


// note:----- it may be forward slash (/) or backward slash depending upon the environment(\)
console.log(path.sep)

// here we should use forward slash 

// both will give the same path 
const filePath = path.join('/content', 'subfolder', 'test.txt');
const filePath1 = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);
console.log(filePath1);


// it will return the actual file which we need like here is test.txt which is the real base for the search 
const base = path.basename(filePath);
console.log(base);


// it provide the absolute path  
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath);
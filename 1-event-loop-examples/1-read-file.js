// event Loops:- The event loops is what that allow node .js to perform non Blocking i/o operations - despite the fact that javascript
//  is single-threaded- by offloading operations to the system kernel whenever possible.


// Event loop register the callback and only when the operation is complete it will execute the code  it will reduce delay time

const { readFile } = require('fs');
console.log("started the first task");

// CHECK FILE PATH 
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
    console.log("completed the fist task");

})

console.log("starting the next task");
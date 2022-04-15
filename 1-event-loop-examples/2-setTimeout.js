// starting the operating system process 

// note :-- in setTimeout : given time ke baad process chalega aur exit kr jaayega 

console.log('first');
setTimeout(() => {
    console.log('second');

}, 0);

console.log('third');
// completed and exited the operating system process
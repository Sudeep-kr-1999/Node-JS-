// note:-------- in setInterval given time ke interval par bar bar process chalega aur tbtk chalega jab tk manually exit na kr de 

setInterval(() => {
    console.log("hello world");
}, 2000);

console.log("i will run first");

// process stay alive unless 
// kill process CONTROL+C 
// unexpected error
// ======================================================================================================
// Note:----- in node there is no window 


// Global variables in node generally used :--------- 
// Globals -No window !!!!

// __dirname - path to the current directory
// __filename -  file name
// require - function to use as modules (commonJS)
// module - info about current module(file)
// process - info about environment where the programme is being executed

// console.log(__dirname);
// console.log(require);

setInterval(() => {
    console.log("hello world");
}, 1000)
// this will also do the same work as we are doing by require('util') 
// =================================================================================================================================
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', 'THIS IS AWESOME WE READ AND WRITE THE FILE WITH THE HELP OF PROMISE', { flag: 'a' });
        console.log(first, second);


    } catch (error) {
        console.log(error);

    }

}
start();

// ==========================================================================================================================================
// const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8');
//         const second = await readFilePromise('./content/second.txt', 'utf8');
//         await writeFilePromise('./content/result-mind-grenade.txt', 'THIS IS AWESOME WE READ AND WRITE THE FILE WITH THE HELP OF PROMISE');
//         console.log(first, second);


//     } catch (error) {
//         console.log(error);

//     }

// }
// start();
// ======================================================================================================================
// approach with the help of promises 

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (error, data) => {
//             if (error) {
//                 reject(error);
//                 return;

//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt').then(data => console.log(data)).catch(error => console.log(error));

// // ======================================================================================================================

// approach with async and await and promises 
// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first, second);


//     } catch (error) {
//         console.log(error);

//     }

// }
// start();
// // ======================================================================================================================

// without promise approach 
// readFile('./content/first.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.log(error);
//         return;

//     } else {
//         console.log(data);
//     }


// })
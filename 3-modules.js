// Common JS , every file is module(by default)! 
// Modules:- Encapsulated Code (Only share minimum)
// Modules

// const secret = 'SUPER_SECRET';
// const john = 'john';
// const peter = 'peter';


// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }
// =============================================================

const names = require('./4-names');

// we can also use object destructuring :------------
// const { john, peter } = require('./4-names');


const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');


// note:--------- bina variable bnaye huye agr require() krege to uske andar ka function automatic chl jaayega (very very important)agr us file mein export nhi h toh ,agr wo krta to wo 
//   usko ek function mein wrap kr deta phir hume variable bnana hota use krne ke liye !
require('./7-mind-grenade');
// console.log(data);
// console.log(names);

// sayHi('Sudeep');
// sayHi(names.john);
// sayHi(names.peter);

// =============================================================================================

// NOTE:--------- Some useful built in Modules :

// 1. os
// 2. path
// 3. fs
// 4. http
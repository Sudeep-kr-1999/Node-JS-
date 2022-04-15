// npm : - global command , comes with node 
// npm --version


// local dependency:-- use it only in this particular project 
// npm i <packagename> 

// global dependency :-- use it in any project 
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json:-- manifest FileList(stores important info about project/package);
// manual approach (create package.json in the root , create properties etc)
// npm init (steps by step press enter to skip)
// npm init -y (everything default)

// for dev dependencies: 

// npm i <packageName> -D 
// or 
// npm i <packageName> --save-dev 


// "scripts": {

//     // note:-- here in package.json we set the start as the below command so we can use npm start to run our project  
// basically we can set command or required script as per our need or ease 
//     "start":"node app.js"
//     "test": "echo \"Error: no test specified\" && exit 1"
//   }

// some command can be run like npm start(npm < commandName > ) but some command can be general way that is npm run < commandName >


// for uninstall package:-- npm uninstall <packageName>
// or directly remove from the dependency 




const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello people");
console.log("hello sudeep to the nodemon functionality");


// Upcoming Topics 

// 1. Event Loops, Async Patterns, Event Emitters and Streams
// 2. Main Concept
// 3. Pre-built Code
// Events:--------

// 1. Event-Driven Programming
// 2. Used heavily in node.js

// ============================================================================================================================= 
// EventEmitter :

// on:-- listen for an event
// emit:-- emit an event


// Note:--- hum ek event k liye jitne mn kre utne eventFunction create kr skte h 
// Note1:--- the order matters means we cannot emit an event without listening it so we first listen to event then emit it.
// Note2:-- we can also paas the argument to the .emit() function whichever we like name ,number or anything , just to take take that those argument
//  should be available on the function while create event with .on() function 

// Note4:--- EventEmitter is the building block of node js application it is being used by various inbuilt module in node js 
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// here 'response' is the name of the event which we want to create 

// emitter with arguments 

customEmitter.on('response', (name, id) => {
    console.log(` Event Emitted and Data received name: ${name} and id : ${id}`)
})

customEmitter.on('response', () => {
    console.log(` Event Emitted and Data received with some other logic `)
})

// here 'response' is the name of the event which we want to emit 
// customEmitter.emit('response');
customEmitter.emit('response', "sudeep", 3);
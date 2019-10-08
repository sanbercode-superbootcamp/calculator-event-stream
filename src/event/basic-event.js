const EventEmitter = require('events');
const emitter = new EventEmitter();

const print = function(message) {
  console.log(message);
}

// Create a listener
emitter.addListener('messageReceived', print);

// Same with add listener (mostly used by developer)
emitter.on('messageReceived', print);

// Create a listener. this listener on listen to the event once.
// after that, this listener will be removed
emitter.once('messageReceived', print);

// Emit an event without data
emitter.emit('messageReceived');

// Remove existing listener that listen to an event with same callbacks
emitter.removeListener('messageReceived', print);

// Set maximum listener. Default: 10
emitter.setMaxListeners(12);

// Emit an event with data
emitter.emit('messageReceived', 'This is the message I sent.');
emitter.emit('messageReceived', 'This is the message too.');

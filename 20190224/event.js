const {
  EventEmitter
} = require('events');

class MyE extends EventEmitter {};

const emitter = new MyE();

const func1 = () => {
  console.log(1)
}

const func2 = () => {
  console.log(2)
}

emitter.on('login', func1);

emitter.on('login', func2);

emitter.emit('login')
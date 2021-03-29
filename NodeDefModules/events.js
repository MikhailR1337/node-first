const EventEmitter = require('events');

/* const emitter = new EventEmitter();

emitter.on('anything', (data) => {
    console.log('ON: anything,', data);
})

emitter.emit('anything', { a: 1 })
emitter.emit('anything', { b: 2 })
emitter.emit('anything', { c: 3 })


setTimeout(() => {
    emitter.emit('anything', { d: 4 })
}, 2000); */

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher();

dis.subscribe('privet', data => {
    console.log('ON: privet', data);
})

dis.dispatch('privet', { 'nu': 'privet' });
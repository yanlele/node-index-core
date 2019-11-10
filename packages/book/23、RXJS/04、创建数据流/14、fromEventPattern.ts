/**
 fromEvent能够从事件源产⽣Observable，但是要求数据源表现得像是浏览器的DOM或者Node.js的EventEmitter。

 fromEventPattern接受两个函数参数，分别对应产⽣的Observable对象被订阅和退订时的动作，
 因为这两个参数是函数，具体的动作可以任意定义，所以可以⾮常灵活。
 */
import { EventEmitter } from 'events';
import { fromEventPattern } from 'rxjs';

const emitter = new EventEmitter();

const addHandler = handler => emitter.addListener('msg', handler);
const removeHandler = handler => emitter.removeListener('msg', handler);

const source$ = fromEventPattern(addHandler, removeHandler);

const subscription$ = source$.subscribe(value => console.log(value));

emitter.emit('msg', 'hello');
emitter.emit('msg', 'world');

subscription$.unsubscribe();
emitter.emit('msg', 'end');

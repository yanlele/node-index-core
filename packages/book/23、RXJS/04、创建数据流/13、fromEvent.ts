import * as EventEmitter from 'events';
import { fromEvent } from 'rxjs';

const emitter = new EventEmitter();
const source$ = fromEvent(emitter, 'message');
source$.subscribe(
  value => console.log(value),
  error => console.log('catch', error),
  () => console.log('complete'),
);

emitter.emit('message', 1);
emitter.emit('message', 2);
emitter.emit('other', 'oops');
emitter.emit('message', 3);

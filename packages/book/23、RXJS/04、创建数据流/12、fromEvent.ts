import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = fromEvent(document, 'click');
const resource$ = source$.pipe(
  map(event => `Event time: ${event.timeStamp}`)
);

resource$.subscribe(value => console.log(value));

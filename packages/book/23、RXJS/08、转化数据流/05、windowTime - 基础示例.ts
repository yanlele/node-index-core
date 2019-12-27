import { timer } from 'rxjs';
import { mergeAll, windowTime } from 'rxjs/operators';


const source$ = timer(0, 100);
const result$ = source$.pipe(
  windowTime(400),
  mergeAll()
);

result$.subscribe(value => console.log(value));

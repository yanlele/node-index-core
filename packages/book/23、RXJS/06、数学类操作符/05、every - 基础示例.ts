import { interval } from 'rxjs';
import { every } from 'rxjs/operators';

const source$ = interval(1000);
const every$ = source$.pipe(every(x => x < 3));
every$.subscribe(value => console.log(value));

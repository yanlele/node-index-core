import { interval } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

const source$ = interval(1000).pipe(skipWhile(value => value % 2 === 0));
source$.subscribe(value => console.log(value));

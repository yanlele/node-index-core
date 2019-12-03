import { interval } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

const source$ = interval(5000);
const secondSource$ = interval(1000);

const example$ = secondSource$.pipe(
  withLatestFrom(source$),
  map(([first, second]) => `Source (1s): ${first} Latest From (5s): ${second}`)
);

example$.subscribe(value => {console.log(value);});
/*
结果：
Source (1s): 4 Latest From (5s): 0
Source (1s): 5 Latest From (5s): 0
Source (1s): 6 Latest From (5s): 0
Source (1s): 7 Latest From (5s): 0
Source (1s): 8 Latest From (5s): 0
Source (1s): 9 Latest From (5s): 1
*/

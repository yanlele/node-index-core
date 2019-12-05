import { interval } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

const secondSource$ = interval(1000);
const source$ = interval(5000);
const example$ = source$.pipe(
  withLatestFrom(secondSource$),
  map(([first, second]) => {
    return `First Source 5s: ${first}; Second Source 1s: ${second}`
  }),
);
example$.subscribe(value => {console.log(value)});

/*
结果：
First Source 5s: 0; Second Source 1s: 3
First Source 5s: 1; Second Source 1s: 8
First Source 5s: 2; Second Source 1s: 13
* */



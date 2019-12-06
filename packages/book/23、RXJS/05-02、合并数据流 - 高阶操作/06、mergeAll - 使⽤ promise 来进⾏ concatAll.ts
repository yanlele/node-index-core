import { of } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';

const myPromise = value => new Promise(resolve => setTimeout(() => resolve(`Result: ${value}`), 2000));

const source$ = of(1, 2, 3);
const example$ = source$.pipe(
  map(value => myPromise(value)),
  mergeAll(),
);

example$.subscribe(value => console.log(value));
/*
结束：
Result: 1
Result: 2
Result: 3
* */

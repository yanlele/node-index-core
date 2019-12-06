import { interval } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';

const simplePromise = value => new Promise(resolve => resolve(value));

const source$ = interval(2000);

const example$ = source$.pipe(
  map(value => simplePromise(value)),
  concatAll(),
);

example$.subscribe(value => {console.log(value)});
/*
结果
0
1
2
.......
* */

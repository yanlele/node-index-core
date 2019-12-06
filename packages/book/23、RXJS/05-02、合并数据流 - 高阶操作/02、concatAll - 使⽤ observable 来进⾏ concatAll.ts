import { interval, of } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';

const source$ = interval(2000);
const example$ = source$.pipe(
  map(value => of(value + 10)),
  concatAll(),
);

example$.subscribe(value => {console.log(value)});
/*
结果：
10
11
12
13
.......
* */

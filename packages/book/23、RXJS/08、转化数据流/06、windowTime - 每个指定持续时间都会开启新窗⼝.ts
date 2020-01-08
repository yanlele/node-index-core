import { timer } from 'rxjs';
import { mergeAll, tap, windowTime } from 'rxjs/operators';

const source$ = timer(0, 1000);
const example$ = source$.pipe(
  windowTime(3000),
  tap(() => console.log('new window')),
  mergeAll(),
);

example$.subscribe(value => console.log(value));

/*
结果：
new window
0
1
2
new window
3
4
5
new window
6
7
8
.......
* */

import { interval } from 'rxjs';
import { delay, map, mergeAll, take } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(5));
const example$ = interval$.pipe(
  map(() =>
    interval$.pipe(
      delay(1000),
      take(3),
    ),
  ),
  mergeAll(5),
);

example$.subscribe(value => console.log(value));
/*
结果:
0
0
1
0
1
2
1
2
0
1
0
2
2
1
2
* */

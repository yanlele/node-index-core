import { interval } from 'rxjs';
import { map, mergeAll, take } from 'rxjs/operators';

const ho$ = interval(1000).pipe(
  take(2),
  map(value => interval(1500).pipe(map(y => `${value}: ${y}`))),
  mergeAll(),
);

ho$.subscribe(value => console.log(value));
/*
结果：
0: 0
1: 0
0: 1
1: 1
0: 2
1: 2
0: 3
1: 3
0: 4
1: 4
0: 5
...............
* */

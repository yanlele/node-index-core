import { interval } from 'rxjs';
import { combineAll, map, take } from 'rxjs/operators';

const ho$ = interval(1000).pipe(
  take(2),
  map(x => interval(1500).pipe(
    map(y => `${x}: ${y}`),
    take(2),
  )),
  combineAll(),
);

ho$.subscribe(value => console.log(value));
/*
结果：
[ '0: 0', '1: 0' ]
[ '0: 1', '1: 0' ]
[ '0: 1', '1: 1' ]
* */

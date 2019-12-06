import { interval } from 'rxjs';
import { map, take, zipAll } from 'rxjs/operators';

const ho$ = interval(1000).pipe(
  take(2),
  map(value => interval(1500).pipe(
    map(y => `${value}: ${y}`),
    take(2),
  )),
);
const result$ = ho$.pipe(zipAll());

result$.subscribe(value => console.log(value));
/*
结果：
[ '0: 0', '1: 0' ]
[ '0: 1', '1: 1' ]
* */

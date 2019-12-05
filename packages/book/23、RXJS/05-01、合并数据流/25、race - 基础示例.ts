import { timer } from 'rxjs';
import { map, race } from 'rxjs/operators';

const source1$ = timer(0, 2000)
  .pipe(
    map(value => `${value} - a`)
  );

const source2$ = timer(500, 1000)
  .pipe(
    map(value => `${value} - b`)
  );

// const result$ = race(source1$, source2$);

const result$ = source1$.pipe(
  race(source2$),
);

result$.subscribe(value => {console.log(value);});

/*
执行结果
0 - a
1 - a
2 - a
3 - a
4 - a
。。。。。。
* */

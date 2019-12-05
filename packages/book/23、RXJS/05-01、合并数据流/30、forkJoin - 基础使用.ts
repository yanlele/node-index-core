import { forkJoin, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const source1$ = interval(1000).pipe(
  map(x => `${x} - a`),
  take(1),
);

const source2$ = interval(1000).pipe(
  map(x => `${x} - b`),
  take(3),
);

const concated$ = forkJoin(source1$, source2$);

concated$.subscribe(value => {console.log(value);});

/*
结果
[ '0 - a', '2 - b' ]
* */

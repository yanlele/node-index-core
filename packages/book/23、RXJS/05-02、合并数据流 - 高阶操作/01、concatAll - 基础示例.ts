import { interval } from 'rxjs';
import { concatAll, map, take } from 'rxjs/operators';

const ho$ = interval(1000).pipe(
  take(2),
  map(x => interval(1500).pipe(map(y => `${x}: ${y}`, take(2)))),
  concatAll(),
);

ho$.subscribe(value => {console.log(value);});

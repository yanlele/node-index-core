/**
 * 以交替的时间间隔对多个 observables 进⾏ zip
 */
import { of, zip } from 'rxjs';
import { delay } from 'rxjs/operators';

const sourceOne$ = of('hello');
const sourceTwo$ = of('world!');
const sourceThree$ = of('GoodBye');
const sourceFour$ = of('world!');

const example$ = zip(
  sourceOne$,
  sourceTwo$.pipe(delay(1000)),
  sourceThree$.pipe(delay(2000)),
  sourceFour$.pipe(delay(3000)),
);

example$.subscribe(value => console.log(value));
// [ 'hello', 'world!', 'GoodBye', 'world!' ]



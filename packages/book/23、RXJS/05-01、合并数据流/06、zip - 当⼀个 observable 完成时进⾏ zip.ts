/**
 * 当⼀个 observable 完成时进⾏ zip
 */
import { interval, zip } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(1000);
const example$ = zip(
  interval$,
  interval$.pipe(take(2))
);
example$.subscribe(value => console.log(value));
// [ 0, 0 ]
// [ 1, 1 ]

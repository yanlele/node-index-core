import { forkJoin, interval, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const myPromise = value => new Promise(resolve => {
  setTimeout(() => resolve(`Promise resolved : ${value}`), 5000);
});

const example$ = forkJoin(
  of('hello'),
  of('world').pipe(delay(1000)),
  interval(1000).pipe(take(1)),
  interval(1000).pipe(take(2)),
  myPromise('result'),
);

example$.subscribe(value => console.log(value));
/*
[ 'hello', 'world', 0, 1, 'Promise resolved : result' ]
* */

import { forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const myPromise = value => new Promise(resolve => {
  setTimeout(() => resolve(`Promise resolved : ${value}`), 1000);
});

const source$ = of([1, 2, 3, 4, 5]);
const example$ = source$.pipe(
  mergeMap(q => forkJoin(...q.map(myPromise)))
);
example$.subscribe(value => {console.log(value);});
/*
结果：
[ 'Promise resolved : 1',
  'Promise resolved : 2',
  'Promise resolved : 3',
  'Promise resolved : 4',
  'Promise resolved : 5' ]
* */

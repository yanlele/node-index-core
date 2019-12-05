import { forkJoin, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

const example$ = forkJoin(
  of('hello'),
  of('world').pipe(delay(1000)),
  throwError('this will error'),
);

example$.subscribe(
  value => {console.log(value);},
  error => {console.log('error: ' + error);}
);
/*
error: this will error
* */

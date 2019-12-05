import { forkJoin, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';


const example$ = forkJoin(
  of('hello'),
  of('world').pipe(delay(1000)),
  throwError('this will error').pipe(catchError(error => of(error)))
);

example$.subscribe(value => {console.log(value);});
/*
结果：
[ 'hello', 'world', 'this will error' ]
* */

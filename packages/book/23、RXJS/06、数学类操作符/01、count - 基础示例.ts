import { of } from 'rxjs';
import { concat, count } from 'rxjs/operators';

const source$ = of(1,2,3).pipe(
  concat(of(4,5,6)),
  count(),
);

source$.subscribe(value => console.log(value));
/*
结果：
6
* */

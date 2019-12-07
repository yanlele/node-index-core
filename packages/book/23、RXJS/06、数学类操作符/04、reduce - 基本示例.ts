import { range } from 'rxjs';
import { reduce } from 'rxjs/operators';

const source$ = range(1, 100).pipe(
  reduce((acc, current) => acc + current, 0)
);

source$.subscribe(value => console.log(value));
/*
结果：
5050
* */

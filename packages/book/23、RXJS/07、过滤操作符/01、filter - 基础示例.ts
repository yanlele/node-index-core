import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

const source$ = range(1, 5);
const even$ = source$.pipe(
  filter(x => x % 2 === 0),
);

even$.subscribe(value => console.log(value));
/*
结果：
2
4
* */

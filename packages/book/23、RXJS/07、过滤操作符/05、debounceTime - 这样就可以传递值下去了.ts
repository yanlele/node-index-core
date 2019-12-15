import { interval } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

const source$ = interval(1000).pipe(
  filter(x => x % 3 === 0),
  debounceTime(2000),
);

source$.subscribe(value => console.log(value));
/*
结果：
0
3
6
9
.......
* */

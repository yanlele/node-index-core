import { timer } from 'rxjs';
import { concat, count } from 'rxjs/operators';

const source$ = timer(1000).pipe(
  concat(timer(1000)),
  count(),
);

source$.subscribe(value => console.log(value));
/*
结果：
2

但是这个是2秒之后才得到结果
* */

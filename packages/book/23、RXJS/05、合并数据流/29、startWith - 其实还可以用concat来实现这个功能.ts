import { of, timer } from 'rxjs';
import { concat } from 'rxjs/operators';

const origin$ = timer(1000, 1500);
const result$ = of('start').pipe(
  concat(origin$),
);

result$.subscribe(value => console.log(value));
/*
运行结果
start
0
1
2
3
......
*/

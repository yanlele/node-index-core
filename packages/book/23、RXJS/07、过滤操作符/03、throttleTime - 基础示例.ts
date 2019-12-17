import { interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

const source$ = interval(1000);
const result$ = source$.pipe(
  throttleTime(2000)
);

result$.subscribe(value => console.log(value));
/*
结果：
0
2
4
* */

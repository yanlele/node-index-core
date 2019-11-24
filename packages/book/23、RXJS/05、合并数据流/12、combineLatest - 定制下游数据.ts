import { combineLatest, timer } from 'rxjs';
import { map } from 'rxjs/operators';

const source1$ = timer(500, 1000);
const source2$ = timer(1000, 1000);
const project = (a, b) => `${a} and ${b}`;

const result$ = combineLatest(source1$, source2$, project);
result$.subscribe(value => console.log(value));

/* ==============================  map 操作符号的场景 - Start ============================== */
const result2$ = combineLatest(source1$, source2$)
  .pipe(map(arr => project(...arr)));
result2$.subscribe(value => console.log(value)); // 输出结果跟上面一模一样

/* ==============================  map 操作符号的场景 - End   ============================== */

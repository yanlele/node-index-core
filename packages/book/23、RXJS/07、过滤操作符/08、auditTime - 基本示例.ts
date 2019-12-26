import { interval } from 'rxjs';
import { auditTime } from 'rxjs/operators';

const source$ = interval(1000);
const result$ = source$.pipe(auditTime(2000));

result$.subscribe(value => console.log(value));

/*
结果：
2
4
。。。。。。
* */

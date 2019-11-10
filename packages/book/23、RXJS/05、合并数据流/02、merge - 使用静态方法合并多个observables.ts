/**
 * 基本使用
 */
import { interval, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const first$ = interval(2500);
const second$ = interval(2000);
const third$ = interval(1500);
const fourth$ = interval(1000);

// 从一个observable中发出输出值
const example$ = merge(
  first$.pipe(mapTo('first!')),
  second$.pipe(mapTo('second!')),
  third$.pipe(mapTo('third!')),
  fourth$.pipe(mapTo('fourth!')),
);

example$.subscribe(value => console.log(value));



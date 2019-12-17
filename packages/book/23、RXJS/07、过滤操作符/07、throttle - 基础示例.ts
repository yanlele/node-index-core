import { interval, timer } from 'rxjs';
import { throttle } from 'rxjs/operators';

const source$ = interval(1000);
const durationSelector = value => {
  console.log(`durationSelector: ${value}`);
  return timer(2000);
};

const result$ = source$.pipe(
  throttle(durationSelector)
);

result$.subscribe(value => console.log(value));

/*
结果：
0
durationSelector: 0
3
durationSelector: 3
6
durationSelector: 6
8
durationSelector: 8
10
durationSelector: 10
......
* */

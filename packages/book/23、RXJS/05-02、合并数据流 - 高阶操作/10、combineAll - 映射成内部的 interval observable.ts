import { interval } from 'rxjs';
import { combineAll, map, take } from 'rxjs/operators';

const source$ = interval(1000).pipe(
  take(2),
);

/*
// 将 source 发出的每个值映射成取前5个值的 interval observable
source$ 中的2个值会被映射成2个(内部的) interval observables，
这2个内部 observables 每秒使⽤ combineLatest 策略来 combineA
ll，
每当任意⼀个内部 observable 发出值，就会发出每个内部 observable
的最新值。
*/
const example$ = source$.pipe(
  map(value => interval(1000).pipe(
    map(i => `Result (${value}): ${i}`),
    take(5)
  )),
  combineAll()
);

example$.subscribe(value => console.log(value));
/*
结果：
[ 'Result (0): 0', 'Result (1): 0' ]
[ 'Result (0): 1', 'Result (1): 0' ]
[ 'Result (0): 1', 'Result (1): 1' ]
[ 'Result (0): 2', 'Result (1): 1' ]
[ 'Result (0): 2', 'Result (1): 2' ]
[ 'Result (0): 3', 'Result (1): 2' ]
[ 'Result (0): 3', 'Result (1): 3' ]
[ 'Result (0): 4', 'Result (1): 3' ]
[ 'Result (0): 4', 'Result (1): 4' ]
* */


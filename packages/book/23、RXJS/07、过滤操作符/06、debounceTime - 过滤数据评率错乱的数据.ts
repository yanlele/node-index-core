import { interval } from 'rxjs';
import { concat, mapTo, take } from 'rxjs/operators';

const source$ = interval(500).pipe(
  take(2),
  mapTo('A'),
  concat(interval(1000).pipe(
    take(3),
    mapTo('B'),
  )),
  concat(interval(500).pipe(
    take(3),
    mapTo('c'),
  )),
);
source$.subscribe(value => console.log(value));
/*
结论：
第⼀阶段，以500毫秒间隔产⽣2个数据A；
第⼆阶段，以1000毫秒间隔产⽣3个数据B；
第三阶段，持续以500毫秒产⽣3个数据C;

总的看来很清楚，debounceTime只有在上游的数据产⽣的时间间隔⼤
于参数dueTime的时候才会给下游传递数据，⽽且，上游完结的时候，最
后⼀个数据总是会进⼊debounceTime的下游。
* */

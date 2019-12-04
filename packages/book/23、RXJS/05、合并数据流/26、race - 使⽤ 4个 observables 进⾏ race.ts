import { interval, race } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const result$ = race(
  interval(1500),
  interval(1000).pipe(mapTo('1s won')),
  interval(2000),
  interval(3000),
);

result$.subscribe(value => {console.log(value);});
/*
* 执行结果
1s won
1s won
1s won
1s won
......
* */

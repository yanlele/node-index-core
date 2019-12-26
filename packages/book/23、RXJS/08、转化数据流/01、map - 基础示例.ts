import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = of(3, 1, 4);

// 这个地方必须要用 function， 要不然拿不到this
const mapFunc = function(value, index) {
  return `${value} ${this.separator} ${index}`;
};
const context = { separator: ': ' };
const result$ = source$.pipe(
  map(mapFunc, context),
);

result$.subscribe(value => console.log(value));
/*
结果：
3 :  0
1 :  1
4 :  2
* */

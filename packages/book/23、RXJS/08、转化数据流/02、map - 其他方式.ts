import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = of(3, 1, 4);
const context = { separator: ': ' };
const mapFunc = (separator: string) => (value, index) => `${value} ${separator} ${index}`;
const result$ = source$.pipe(
  map(mapFunc(context.separator)),
);

result$.subscribe(value => console.log(value));
/*
3 :  0
1 :  1
4 :  2
* */

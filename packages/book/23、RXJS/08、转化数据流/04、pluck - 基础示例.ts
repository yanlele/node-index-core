import { of } from 'rxjs';
import { pluck } from 'rxjs/operators';

const source$ = of(
  { name: 'RxJS', version: 'v4' },
  { name: 'React', version: 'v15' },
  { name: 'React', version: 'v16' },
  { name: 'RxJS', version: 'v5' },
);

const result$ = source$.pipe(
  pluck('name'),
);

result$.subscribe(value => console.log(value));
/*
结果：
RxJS
React
React
RxJS
* */

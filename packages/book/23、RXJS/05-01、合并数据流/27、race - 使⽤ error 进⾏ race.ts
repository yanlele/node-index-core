import { of, race } from 'rxjs';
import { delay, map } from 'rxjs/operators';

//抛出错误并忽略其他的 observables 。
const first$ = of('first').pipe(
  delay(100),
  map(() => {
    throw 'error';
  }),
);

const second$ = of('second').pipe(delay(200));
const third$ = of('third').pipe(delay(300));

const result$ = race(first$, second$, third$);
result$.subscribe(value => {console.log(value);});

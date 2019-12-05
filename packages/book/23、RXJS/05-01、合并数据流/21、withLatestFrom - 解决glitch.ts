import { timer } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

const original$ = timer(0, 1000);
const source1$ = original$.pipe(map(x => x + 'a'));
const source2$ = original$.pipe(map(x => x + 'b'));

const result$ = source1$.pipe(withLatestFrom(source2$));

result$.subscribe(value => console.log(value));

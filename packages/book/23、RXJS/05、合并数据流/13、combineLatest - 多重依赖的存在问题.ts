import { combineLatest, timer } from 'rxjs';
import { map } from 'rxjs/operators';

const original$ = timer(0, 1000);
const source1$ = original$.pipe(map(x => x + ' a'));
const source2$ = original$.pipe(map(x => x + ' b'));
const result$ = combineLatest(source1$, source2$);

result$.subscribe(value => console.log(value));

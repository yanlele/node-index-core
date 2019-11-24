import { combineLatest, of, timer } from 'rxjs';

const source1$ = timer(500, 1000);
const source2$ = of('a');
const result$ = combineLatest(source1$, source2$);

result$.subscribe(value => console.log(value));


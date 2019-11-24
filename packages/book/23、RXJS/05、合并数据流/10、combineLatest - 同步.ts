import { combineLatest, of } from 'rxjs';

const source1$ = of('a', 'b', 'c');
const source2$ = of(1, 2, 3);
const result$ = combineLatest(source1$, source2$);

result$.subscribe(value => console.log(value));

import { combineLatest, of } from 'rxjs';

const source1$ = of('a', 'b', 'c');
const source2$ = of(1, 2, 3);
const source3$ = of('x', 'y');
const result$ = combineLatest(source1$, source2$, source3$);

result$.subscribe(value => console.log(value));

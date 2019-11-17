import { of, zip } from 'rxjs';

const source1$ = of(1, 2, 3);
const source2$ = of('a', 'b', 'c');
const zipped$ = zip(source1$, source2$);

zipped$.subscribe(value => console.log(value));

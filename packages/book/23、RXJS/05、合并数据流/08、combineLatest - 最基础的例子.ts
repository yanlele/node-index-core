import { combineLatest, timer } from 'rxjs';

const source1$ = timer(500, 1000);
const source2$ = timer(1000, 1000);
const resource$ = combineLatest(source1$, source2$);

resource$.subscribe(value => console.log(value));


import { merge, timer } from 'rxjs';
import { map } from 'rxjs/operators';

const source1$ = timer(0, 1000).pipe(map(x => x + 'A'));
const source2$ = timer(500, 1000).pipe(map(x => x + 'B'));
const source3$ = timer(1000, 1000).pipe(map(x => x + 'C'));

// source3$中的数据永远不会获得进⼊merged$的机会，因为 merge最后⼀个参数是2，也就限定了同时只能同步合并两个Observable对象的数据，
const merged$ = merge(source1$, source2$, source3$, 2);

merged$.subscribe(value => console.log(value));

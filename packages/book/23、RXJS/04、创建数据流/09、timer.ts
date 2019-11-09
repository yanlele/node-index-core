import { timer } from 'rxjs';

// 如果只有一个参数， 那么发出 0 之后， 就立马结束了
const source$ = timer(1000);
source$.subscribe(value => console.log('source$: ', value));

// timer 接收第⼆个参数，它决定了发出序列值的频率，在本例中我们在1秒发出第⼀个值，
// 然后每0.5秒发出序列值
// 所以结果是 timer 1秒后发出值，然后每0.5秒发出值
const source2$ = timer(1000, 500);
source2$.subscribe(value => console.log('source2$: ', value));


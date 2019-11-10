/**
 * 最基本的使用
 *
 * 下面这种方式是作为 静态方法的实现，
 * 在RXJS5 版本的时候， 是可以通过实例方法实现concat的， 但是到了6 版本就取消了
 * 实例方法就是这样的 sourceOne$.concat(sourceTwo$); 这种方式在6版本取消了
 * 六版本只允许静态方法的方式创建合并
 */
import { concat, interval, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const sourceOne$ = of(1, 2, 3);
const sourceTwo$ = of(4, 5, 6);
const example$ = concat(sourceOne$, sourceTwo$);

example$.subscribe(value => console.log(value));

/**
 * 使⽤延迟的 source observable 进⾏ concat
 */
// 延迟3秒发出
const sourceThree$ = sourceOne$.pipe(delay(3000));
// sourceTwo$ 要等待 sourceOne$ 完成之后才能订阅
const example2$ = concat(sourceThree$, sourceTwo$);
example2$.subscribe(value => console.log('Example: Delayed source one : ', value));

/**
 * 使⽤不完成的 source observable 进⾏ concat
 */
const source3$ = concat(interval(1000), of('this', 'never', 'runs'));
source3$.subscribe(value => console.log('Example: Source never completes, second observable never runs: ', value));

/**
 *
 我们知道fromEvent可以从⽹页中获取事件，只可惜，fromEvent⼀次
 只能从⼀个DOM元素获取⼀种类型的事件。⽐如，我们关⼼某个元素的
 click事件，同时也关⼼这个元素上的touchend事件，因为在移动设备上
 touchend事件出现得⽐click更早，这两个事件的处理是⼀模⼀样的，但是
 fromEvent不能同时获得两个事件的数据流，这时候就要借助merge的⼒量
 了，代码如下：
 */
import { fromEvent, merge } from 'rxjs';

const click$ = fromEvent(document, 'click');
const touchend$ = fromEvent(document, 'touchend');
const merged$ = merge(click$, touchend$);

merged$.subscribe(value => console.log(value));

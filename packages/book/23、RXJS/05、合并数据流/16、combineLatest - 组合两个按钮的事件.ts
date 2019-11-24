/**
 * 组合两个按钮事件
 *
 * 下面是对应html 代码块
 <div>
   <button id="red">Red</button>
   <button id="black">Black</button>
 </div>
 <div>Red： <span id="redTotal"></span></div>
 <div>Black： <span id="blackTotal"></span></div>
 <div>Total： <span id="total"></span></div>
 */

import { combineLatest, fromEvent } from 'rxjs';
import { map, mapTo, scan, startWith, tap } from 'rxjs/operators';

const setHtml = id => value => document.getElementById(id).innerHTML = value;

const addOneClick$ = id => fromEvent(document.getElementById(id), 'click')
  .pipe(
    mapTo(1),
    startWith(0),
    scan((acc, curr) => acc + curr),
    tap(setHtml(`${id}ToTal`)),
  );

const combineTotal$ = combineLatest(
  addOneClick$('red'),
  addOneClick$('black'),
).pipe(
  map(([value1, value2]) => value1 + value2),
);

combineTotal$.subscribe(setHtml('total'));

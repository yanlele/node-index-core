/*
<style type="text/css">
  html, body {
  width: 100%;
  height: 100%;
  min-height: 100%;
}
</style>
<body>
<div>
  <div id="text"></div>
  </div>
</div>
*/

import { fromEvent } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

const event$ = fromEvent(document.body, 'click');
const y$ = event$.pipe(map((e: MouseEvent) => e.y));
const x$ = event$.pipe(map((e: MouseEvent) => e.x));
const result$ = x$.pipe(withLatestFrom(y$, (x, y) => `x: ${x}, y: ${y}`));
result$.subscribe(value => {
  console.log('#render: ', value);
  document.querySelector('#text').innerHTML = value;
});

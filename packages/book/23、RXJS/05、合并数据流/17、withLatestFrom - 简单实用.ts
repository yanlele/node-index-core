import { fromEvent, interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const handleTimer = interval(1000);
const result$ = click$.pipe(withLatestFrom(handleTimer));

result$.subscribe(value => console.log(value));

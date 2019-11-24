import { combineLatest, timer } from 'rxjs';

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

const combined$ = combineLatest(timerOne$, timerTwo$, timerThree$, (one, two, three) => {
  return `Timer One (Proj) Latest: ${one},
            Timer Two (Proj) Latest: ${two},
            Timer Three (Proj) Latest: ${three}
            `;
});

combined$.subscribe(value => console.log(value));

import { combineLatest, timer } from 'rxjs';

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

const combined$ = combineLatest(timerOne$, timerTwo$, timerThree$);

combined$.subscribe(latestValues => {
  const [one, two, three] = latestValues;

  console.log(`
    timer one latest: ${one};
    timer two latest: ${two};
    timer three latest: ${three};
  `);
});

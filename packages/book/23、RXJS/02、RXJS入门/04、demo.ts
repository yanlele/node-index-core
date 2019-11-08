import { Observable } from 'rxjs';

const { create } = Observable;

const hello$: Observable<string> = create(observer => {
  observer.next('Hello');
  observer.next('world');
  // observer.error('error');
  observer.complete();
});

hello$.subscribe({
  next: val => {
    console.log(val);
  },
  error: value => {
    console.log('error: ', value);
  },
  complete: () => {
    console.log('complete: ');
  },
});

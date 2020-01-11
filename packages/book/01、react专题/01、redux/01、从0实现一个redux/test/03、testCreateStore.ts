import { createStore } from './02、createStore';

/* ==============================  interface - Start ============================== */
interface InitState {
  counter: {
    count: number;
  };
  info: {
    name: string;
    describe: string;
  };
}

/* ==============================  interface - End   ============================== */

const initState: InitState = {
  counter: {
    count: 0,
  },
  info: {
    name: '',
    describe: '',
  },
};

const store = createStore<InitState>(initState);

store.subscribe(() => {
  const state = store.getState();
  console.log(`info - ${state.info.name}: ${state.info.describe}`);
});

store.subscribe(() => {
  const state = store.getState();
  console.log(`count: ${state.counter.count}`);
});

store.changeState({
  ...store.getState(),
  info: {
    name: 'yanle',
    describe: '代码爱好者',
  },
});

store.changeState({
  ...store.getState(),
  counter: {
    count: 1,
  },
});

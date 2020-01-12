import { createStore } from './redux/createStore';

interface InitState {
  counter: {
    count: number;
  };
  info: {
    name: string;
    description: string;
  };
}

const initState: InitState = {
  counter: {
    count: 0,
  },
  info: {
    name: '',
    description: '',
  },
};

const store = createStore<InitState>(initState);
store.subscribe(() => {
  const state = store.getState();
  console.log(`${state.info.name}: ${state.info.description}`);
});

store.subscribe(() => {
  const state = store.getState();
  console.log(state.counter.count);
});

store.changeState({
  ...store.getState(),
  info: {
    name: 'yanle',
    description: '我是兔子',
  },
});

store.changeState({
  ...store.getState(),
  counter: {
    count: 1,
  },
});

import { createStore, Plan } from './02、createStore';

interface InitState {
  count: number;
}

const initState: InitState = {
  count: 0,
};

const plan: Plan<InitState> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(plan, initState);
store.subscribe(() => {
  const state = store.getState();
  console.log(state.count);
});

// 自增
store.changeState({
  type: 'INCREMENT',
});

// 自减
store.changeState({
  type: 'DECREMENT',
});

/**
 * ts 会报错
 */
store.changeState({
  count: 123,
});

import { createStore, Reducer } from './06、createStore';

interface InitState {
  count: number;
}

const initState: InitState = {
  count: 0,
};

const counterReducer: Reducer<InitState> = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
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

const store = createStore(counterReducer);
console.dir(store.getState());

store.dispatch({
  type: 'INCREMENT',
});

console.log(store.getState());



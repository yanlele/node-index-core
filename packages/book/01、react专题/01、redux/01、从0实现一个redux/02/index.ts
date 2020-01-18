import { createStore } from './redux/createStore';
import reducer from './reducer';

interface InitState {
  count: 0;
}

const initState: InitState = {
  count: 0,
};

const store = createStore(reducer, initState);

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'DECREMENT',
});

store.dispatch({
  type: 'DECREMENT',
});

store.dispatch({
  type: 'DECREMENT',
});

console.log('store.getState', store.getState());

// 这个是不会更改
store.dispatch({
  type: 'abc',
});

console.log('store.getState()', store.getState());

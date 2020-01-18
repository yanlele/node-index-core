import { createState, combineReducers } from './redux';
import counterReducer, { CounterState } from './reducers/counter';
import infoReducer, { InfoState } from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});

interface InitState {
  counter: CounterState;
  info: InfoState;
}

const store = createState<InitState>(reducer);

store.subscribe(() => {
  const state = store.getState();
  console.log(`count: ${state.counter.count}; name: ${state.info.name}; description: ${state.info.description}`);
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'SET_NAME',
  name: 'yanlele',
});

console.log(store.getState());

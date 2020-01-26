import { combineReducers, createStore } from './redux';
import counterReducer from './reducers/counter';
import applyMiddleware from './redux/applyMiddleware';
import { exceptionMiddleware, loggerMiddleware, timeMiddleware } from './middlewares';

const reducer = combineReducers({
  counter: counterReducer,
});

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, loggerMiddleware, timeMiddleware);

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const store = createStore(reducer, {}, rewriteCreateStoreFunc);

store.subscribe(() => {
  const state = store.getState();
  console.log(state.counter.count);
});

/*自增*/
store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'DECREMENT',
});

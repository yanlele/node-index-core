import counterReducer from './reducers/counter';
import { applyMiddleware, createStore, combineReducers } from './redux';
import { exceptionMiddleware, loggerMiddleware, timeMiddleware } from './middlewares';

const reducer = combineReducers({
  counter: counterReducer,
});

const rewriteCreateStore = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);

const store = createStore(reducer, {}, rewriteCreateStore);

store.subscribe(() => {
  console.log(store.getState().counter.count);
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'INCREMENT',
});

console.log(store.getState());

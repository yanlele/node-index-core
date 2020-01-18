import { CreateStore } from './createStore';
import { Reducer } from '../../redux';

const applyMiddleware = (...middleWares: Function[]) => (createStore: CreateStore) => (
  reducer: Reducer,
  initState: any,
) => {
  const store = createStore(reducer, initState);
  const chain = middleWares.map(middleware => middleware(store));
  let dispatch = store.dispatch;
  chain.reverse().map(middleware => {
    dispatch = middleware(dispatch);
  });

  store.dispatch = dispatch;
  return store;
};

export default applyMiddleware;

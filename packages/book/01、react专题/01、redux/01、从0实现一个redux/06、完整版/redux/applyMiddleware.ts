import compose from './compose';
import { CreateStore } from '../../05、中间件/redux/createStore';
import { Reducer } from '../../redux';

const applyMiddleware = (...middleWares: Function[]) => (createStore: CreateStore) => (
  reducer: Reducer,
  initState: any,
) => {
  const store = createStore(reducer, initState);
  const chain = middleWares.map(middleware => middleware(store));
  const dispatch = compose(...chain)(store.dispatch);
  return {
    ...store,
    dispatch,
  };
};

export default applyMiddleware;

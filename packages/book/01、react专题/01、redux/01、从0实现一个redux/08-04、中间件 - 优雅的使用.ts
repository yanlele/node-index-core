export const applyMiddleware = (...middlewares) => oldCreateStore => (reducer, initState) => {
  const store = oldCreateStore(reducer, initState);
  const chain = middlewares.map(item => item(store));
  const dispatch = store.dispatch;
  chain.reverse().map(item => item(dispatch));
  store.dispatch = dispatch;
  return store;
};

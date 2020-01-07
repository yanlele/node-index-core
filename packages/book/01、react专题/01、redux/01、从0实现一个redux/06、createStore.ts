export interface ActionType {
  type: string | symbol;
  payload?: any;
}

export type Reducer<T> = (state: T, action: ActionType) => T;

export const createStore = <T>(reducer: Reducer<T>, initState?: T, rewriteCreateStore?) => {
  // 如果有 rewriteCreateStoreFunc，那就采用新的 createStore
  if (rewriteCreateStore) rewriteCreateStore(createStore);

  let state = initState;

  let listeners = [];

  const subscribe = listener => {
    listeners.push(listener);
  };

  const dispatch = (action: ActionType) => {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  };

  const getState = () => state;

  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState,
  };
};

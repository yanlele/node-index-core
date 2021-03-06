export interface ActionType {
  type: string | symbol;
  payload?: any;
}

export type Reducer<T> = (state: T, action: ActionType) => T;

type Subscribe = (listener: Function) => void;
export type DispatchType = (action: ActionType) => void;
type GetState<T> = () => T;

export interface CreateStoreReturn<T> {
  subscribe: Subscribe;
  dispatch: DispatchType;
  getState: GetState<T>;
}

export const createStore = <T>(reducer: Reducer<T>, initState?: T, rewriteCreateStore?: any): CreateStoreReturn<T> => {
  // 如果有 rewriteCreateStoreFunc，那就采用新的 createStore
  // if (rewriteCreateStore) rewriteCreateStore(createStore);
  if (rewriteCreateStore) rewriteCreateStore(createStore)(reducer, initState);

  let state = initState;

  const listeners: Function[] = [];

  const subscribe = (listener: Function): void => {
    listeners.push(listener);
  };

  const dispatch = (action: ActionType): void => {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  };

  const getState = (): T => state;

  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState,
  };
};

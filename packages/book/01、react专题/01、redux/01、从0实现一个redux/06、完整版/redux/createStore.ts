import { Reducer } from '../../redux';

type Subscribe = (listener: Function) => void;
export type Dispatch<T = any> = (action: Action) => void;
type GetState<T> = () => T;
type ReplaceReducer = (nextReducer: Reducer) => void;

export interface Action {
  type: string | symbol;

  [key: string]: any;
}

export type Middleware = (createStore: CreateStore | CreateStore[]) => CreateStore;

export interface Store<T = any> {
  subscribe: Subscribe;
  dispatch: Dispatch<T>;
  getState: GetState<T>;
  replaceReducer: ReplaceReducer;
}

export type CreateStore = <T>(reducer: Reducer<T>, initState?: T, middleware?: Middleware) => Store<T>;

const createStore: CreateStore = <T>(reducer: Reducer<T>, initState: T, middleware: Middleware) => {
  let state = initState;
  const listeners: Function[] = [];

  if (middleware) {
    const newCreateStore = middleware(createStore);
    return newCreateStore(reducer, initState);
  }

  const subscribe: Subscribe = listener => {
    listeners.push(listener);
  };

  const dispatch: Dispatch<T> = action => {
    state = reducer(initState, action);
    listeners.forEach(listener => {
      listener();
    });
  };

  const replaceReducer: ReplaceReducer = (nextReducer: Reducer) => {
    reducer = nextReducer;
    dispatch({ type: Symbol() });
  };

  dispatch({ type: Symbol() });

  const getState: GetState<T> = () => state;

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer,
  };
};

export default createStore;

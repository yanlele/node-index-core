import { Reducer } from '../../test/06、createStore';

type Subscribe = (listener: Function) => void;
type Dispatch<T> = (action: Action) => void;
type GetState<T> = () => T;

export type Reducer<InitState> = (state: InitState, action: Action) => InitState;

export interface Action {
  type: string;
  [key: string]: any;
}

type CreateStore = <T>(
  reducer: Reducer<T>,
  initState: T,
) => {
  subscribe: Subscribe;
  dispatch: Dispatch<T>;
  getState: GetState<T>;
};

const createStore: CreateStore = <T>(reducer: Reducer<T>, initState: T) => {
  let state = initState;
  const listeners: Function[] = [];

  const subscribe: Subscribe = listener => {
    listeners.push(listener);
  };

  const dispatch: Dispatch<T> = action => {
    state = reducer(initState, action);
    listeners.forEach(listener => {
      listener();
    });
  };

  const getState: GetState<T> = () => state;

  return {
    subscribe,
    dispatch,
    getState,
  };
};

export default createStore;

import { Reducer } from '../../test/06、createStore';

type Subscribe = (listener: Function) => void;
type Dispatch<T> = (action: Action<T>) => void;
type GetState<T> = () => T;

export type Redurce = <InitState>(state: InitState, action: Action<Partial<InitState>>) => InitState;

export interface Action<T extends {}> {
  type: string;
  payload?: T;
}

type CreateStore = <T>(
  reducer: Reducer<T>,
  initState: T,
) => {
  subscribe: Subscribe;
  dispatch: Dispatch<T>;
  getState: GetState<T>;
};

export const createStore: CreateStore = <T>(reducer: Reducer<T>, initState: T) => {
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

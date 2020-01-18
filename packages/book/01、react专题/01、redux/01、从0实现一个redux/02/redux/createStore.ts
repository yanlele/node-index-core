type Subscribe = (listener: Function) => void;
type Dispatch<T> = (newState: T) => void;
type GetState<T> = () => T;

export interface Action<T extends {}> {
  type: string;
  payload?: T;
}

type CreateStore = <T>(
  initState: T,
) => {
  subscribe: Subscribe;
  dispatch: Dispatch<T>;
  getState: GetState<T>;
};

export const createStore: CreateStore = <T>(initState: T) => {
  let state = initState;
  const listeners: Function[] = [];

  const subscribe: Subscribe = listener => {
    listeners.push(listener);
  };

  const dispatch: Dispatch<T> = newState => {
    state = newState;
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

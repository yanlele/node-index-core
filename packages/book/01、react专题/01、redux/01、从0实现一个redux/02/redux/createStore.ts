type Subscribe = (listener: Function) => void;
type ChangeState<T> = (newState: T) => void;
type GetState<T> = () => T;

type CreateStore = <T>(
  initState: T,
) => {
  subscribe: Subscribe;
  changeState: ChangeState<T>;
  getState: GetState<T>;
};

export const createStore: CreateStore = <T>(initState: T) => {
  let state = initState;
  const listeners: Function[] = [];

  const subscribe: Subscribe = listener => {
    listeners.push(listener);
  };

  const changeState: ChangeState<T> = newState => {
    state = newState;
    listeners.forEach(listener => {
      listener();
    });
  };

  const getState: GetState<T> = () => state;

  return {
    subscribe,
    changeState,
    getState,
  };
};

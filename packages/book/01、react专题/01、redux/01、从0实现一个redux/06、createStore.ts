interface ActionType {
  type: string,
  payload?: any,
}

export type Reducer<T> = (state: T, action: ActionType) => T;

export const createStore = <T>(reducer: Reducer<T>, initState: T) => {
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

  return {
    subscribe,
    dispatch,
    getState,
  };
};

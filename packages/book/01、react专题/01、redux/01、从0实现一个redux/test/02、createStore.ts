interface ActionType {
  type: string;
  payload?: any;
}

export type Plan<T> = (state: T, action: ActionType) => T;

export const createStore = <T>(plan: Plan<T>, initState: T) => {
  let state = initState;

  const listeners: Function[] = [];

  const subscribe = (listener: any) => {
    listeners.push(listener);
  };

  const changeState = (action: ActionType) => {
    state = plan(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  };

  const getState = () => state;

  return {
    subscribe,
    changeState,
    getState,
  };
};

type Plan = <T>(state: T, action: string) => T;

export const createStore = <T>(plan: Plan, initState: T) => {
  let state = initState;

  let listeners = [];

  const subscribe = listener => {
    listeners.push(listener);
  };

  const changeState = (action: string) => {
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

export const createStore = <T>(initState: T) => {
  let state = initState;

  let listeners = [];

  const subscribe = listener => {
    listeners.push(listener);
  };

  const changeState = (newState: T) => {
    state = newState;
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

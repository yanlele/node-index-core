import { ActionType } from './06、createStore';

export const combineReducers = <T>(reducers: T) => {
  const reducerKeys = Object.keys(reducers);

  return (state = {}, action: ActionType) => {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];

      const previousStateForKey = state[key];
      nextState[key] = reducer(previousStateForKey, action);
    }
    return nextState;
  };
};

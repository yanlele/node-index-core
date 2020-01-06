import { ActionType } from './06、createStore';

export const combineReducers = <T>(reducers: T) => (state = {}, action: ActionType) => {
  const nextState = {};
  Object.keys(reducers).forEach(key => {
    nextState[key] = reducers[key](state[key], action);
  });
  return nextState;
};

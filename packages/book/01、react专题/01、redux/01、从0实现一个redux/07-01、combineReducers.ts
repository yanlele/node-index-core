import { ActionType, Reducer } from './06、createStore';

export const combineReducers = <T>(reducers: { [key: string]: Reducer<any> }) => (
  state: { [key: string]: T },
  action: ActionType,
) => {
  const nextState: { [key: string]: T } = {};
  Object.keys(reducers).forEach((key: string) => {
    nextState[key] = reducers[key](state[key], action);
  });
  return nextState;
};

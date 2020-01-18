import { CombinedState, Reducer, ReducersMapObject } from '../../redux';

type CombineReducers<S> = (reducers: ReducersMapObject<S, any>) => Reducer<CombinedState<S>>;

const combineReducers: CombineReducers<any> = reducers => (state, action) => {
  const nextState: CombinedState<any> = {};
  Object.keys(reducers).forEach((key: string) => {
    nextState[key] = reducers[key](state[key], action);
  });
  return nextState;
};

export default combineReducers;

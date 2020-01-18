import { Reducer } from '../../test/06、createStore';

type CombineReducers<T> = (reducers: { [key: string]: Reducer<Partial<T>> }) => Reducer<T>;

const combineReducers: CombineReducers<any> = reducers => (state, action) => {
  const nextState: { [key: string]: any } = {};
  Object.keys(reducers).forEach((key: string) => {
    nextState[key] = reducers[key](state[key], action);
  });
  return nextState;
};

export default combineReducers;

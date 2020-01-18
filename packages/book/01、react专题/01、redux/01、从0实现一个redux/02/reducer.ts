import { Action } from './redux/createStore';

interface InitState {
  count: number;
}

const reducer = (state: InitState, action: Action<Partial<InitState>>) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;

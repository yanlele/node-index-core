import { Reducer } from '../../redux';

export interface CounterState {
  count: number;
}

const initState: CounterState = {
  count: 0,
};

const conterReducer: Reducer = (state: CounterState = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: ++state.count,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: --state.count,
      };
    default:
      return state;
  }
};

export default conterReducer;

import { Reducer } from '../../redux';

export interface CounterState {
  count: number;
}

const initState: CounterState = {
  count: 0,
};

const counterReducer: Reducer = (state: CounterState = initState, action) => {
  if (!state) state = initState;
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

export default counterReducer;

import { ActionType, createStore, Reducer } from './06、createStore';
import { combineReducers } from './07-01、combineReducers';

interface Counter {
  count: number;
}

const counterReducer = (state: Counter, action: ActionType): Counter => {
  switch (action.type) {
    case 'INCREMENT':
      return {
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

interface InfoState {
  name: string;
  description: string;
}

const InfoReducer = (state: InfoState, action: ActionType): InfoState => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.payload.description,
      };
    default:
      return state;
  }
};

interface InitState {
  counter: { count: number };
  info: InfoState;
}

const reducer: Reducer<any> = combineReducers({
  counter: counterReducer,
  info: InfoReducer,
});

const state: InitState = {
  counter: {
    count: 0,
  },
  info: {
    name: 'yanle',
    description: 'codeing',
  },
};

const store = createStore<InitState>(reducer, state);

store.subscribe(() => {
  const state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});
/*自增*/
store.dispatch({
  type: 'INCREMENT',
});

/*修改 name*/
store.dispatch({
  type: 'SET_NAME',
  payload: {
    name: 'yanle2号',
  },
});

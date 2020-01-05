import { ActionType, createStore } from './06、createStore';
import { combineReducers } from './07、combineReducers';

const counterReducer = (state, action: ActionType) => {
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

const InfoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer,
});

interface InitState {
  counter: {count: number},
  info: {name: string, description: string}
}

const state: InitState = {
  counter: {
    count: 0,
  },
  info: {
    name: 'yanle',
    description: 'codeing',
  },
};

let store = createStore<InitState>(reducer, state);

store.subscribe(() => {
  let state = store.getState();
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
    name: '前端九部2号',
  },
});

import { Action, Dispatch, Store } from '../redux/createStore';

const loggerMiddleware = (store: Store) => (dispatch: Dispatch) => (action: Action) => {
  console.log('this state:', store.getState);
  console.log('action: ', action);
  dispatch(action);
  console.log('next state: ', store.getState());
};

export default loggerMiddleware;

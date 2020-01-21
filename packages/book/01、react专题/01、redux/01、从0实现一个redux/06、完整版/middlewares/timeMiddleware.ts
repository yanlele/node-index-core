import { Action, Dispatch } from '../redux/createStore';

const timeMiddleware = () => (dispatch: Dispatch) => (action: Action) => {
  console.log('time: ', +new Date());
  dispatch(action);
};

export default timeMiddleware;

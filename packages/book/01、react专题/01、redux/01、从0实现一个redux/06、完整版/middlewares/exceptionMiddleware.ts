import { Action, Dispatch } from '../redux/createStore';

const exceptionMiddleware = () => (dispatch: Dispatch) => (action: Action) => {
  try {
    dispatch(action);
  } catch (e) {
    console.error('错误报告： ' + e);
  }
};

export default exceptionMiddleware;

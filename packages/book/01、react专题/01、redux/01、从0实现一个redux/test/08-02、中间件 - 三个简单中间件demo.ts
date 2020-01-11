import { ActionType, CreateStoreReturn, DispatchType } from './06、createStore';

export const loggerMiddleWare = <T>(store: CreateStoreReturn<T>) => (dispatch: DispatchType) => (
  action: ActionType,
) => {
  console.log('this state', store.getState());
  console.log('action', action);
  dispatch(action);
  console.log('next state', store.getState());
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const exceptionMiddleWare = <T>(store: CreateStoreReturn<T>) => (dispatch: DispatchType) => (
  action: ActionType,
) => {
  try {
    dispatch(action);
  } catch (e) {
    console.error('错误： ', e);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const timeMiddleWare = <T>(store: CreateStoreReturn<T>) => (dispatch: DispatchType) => (action: ActionType) => {
  console.log('time', +new Date());
  dispatch(action);
};

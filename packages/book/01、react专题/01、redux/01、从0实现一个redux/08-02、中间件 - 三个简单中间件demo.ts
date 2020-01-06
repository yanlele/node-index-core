export const loggerMiddleWare = store => dispatch => action => {
  console.log('this state', store.getState());
  console.log('action', action);
  dispatch(action);
  console.log('next state', store.getState());
};

export const exceptionMiddleWare = store => dispatch => action => {
  try {
    dispatch(action);
  } catch (e) {
    console.error('错误： ', e);
  }
};

export const timeMiddleWare = store => dispatch => action => {
  console.log('time', +new Date());
  dispatch(action);
};

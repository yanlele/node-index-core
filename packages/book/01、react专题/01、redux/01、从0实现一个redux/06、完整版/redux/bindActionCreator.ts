import { Dispatch } from '../../redux';

const bindActionCreator = (actionCreator: Function, dispatch: Dispatch) => (...args: any) =>
  dispatch(actionCreator.apply(this, args));

const bindActionCreators = (actionCreators: Function | { [key: string]: Function }, dispatch: Dispatch) => {
  if (typeof actionCreators === 'function') return bindActionCreator(actionCreators, dispatch);

  const keys: string[] = Object.keys(actionCreators);
  const boundActionCreators: { [key: string]: Function } = {};

  keys.forEach(key => {
    const actionCreator = actionCreators[key];
    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
  });

  return boundActionCreators;
};

export default bindActionCreators;

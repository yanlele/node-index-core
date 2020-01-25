import { Dispatch } from '../../redux';

const bindActionCreator = (actionCreator: Function, dispatch: Dispatch) => (...args: any) =>
  dispatch(actionCreator.apply(this, args));

const bindActionCteators = (actioncreators: Function | { [key: string]: Function }, dispatch: Dispatch) => {
  if (typeof actioncreators === 'function') return bindActionCreator(actioncreators, dispatch);

  const keys: string[] = Object.keys(actioncreators);
  const boundActionCreators: { [key: string]: Function } = {};

  keys.forEach(key => {
    const actionCreator = actioncreators[key];
    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
  });

  return boundActionCreators;
};

export default bindActionCteators;

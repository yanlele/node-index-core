import { Dispatch } from '../../redux';

const bindActionCreator = (actionCreator: Function, dispatch: Dispatch) => (...args: any) =>
  dispatch(actionCreator.apply(this, args));

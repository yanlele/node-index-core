import { Reducer } from '../../redux';

export interface InfoState {
  name: string;
  description: string;
}

const infoState: InfoState = {
  name: 'yanle',
  description: '屌丝',
};

const infoReducer: Reducer = (state: InfoState = infoState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
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

export default infoReducer;

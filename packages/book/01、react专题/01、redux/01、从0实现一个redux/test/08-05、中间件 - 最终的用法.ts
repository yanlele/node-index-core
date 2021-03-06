import { createStore, Reducer } from './06、createStore';
import { exceptionMiddleWare, loggerMiddleWare, timeMiddleWare } from './08-02、中间件 - 三个简单中间件demo';
import { applyMiddleware } from './08-04、中间件 - 优雅的使用';

/*
中间件是对 dispatch 的扩展，或者说重写，增强 dispatch 的功能！

我现在有一个需求，在每次修改 state 的时候，
记录下来 修改前的 state ，为什么修改了，以及修改后的 state。
我们可以通过重写 store.dispatch 来实现，直接看代码
* */
interface InitState {
  count: number;
}

const initState: InitState = {
  count: 0,
};

const counterReducer: Reducer<InitState> = (state = initState, action) => {
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

const reWriteCreateStore = applyMiddleware(exceptionMiddleWare, timeMiddleWare, loggerMiddleWare);

const store = createStore<InitState>(counterReducer, initState, reWriteCreateStore);

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'DECREMENT',
});

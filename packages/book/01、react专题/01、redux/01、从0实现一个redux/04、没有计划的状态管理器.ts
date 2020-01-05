import { createStore } from './02、createStore';

const initState = {
  count: 0,
};

const store = createStore(initState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state.count);
});

// 自增
store.changeState({
  count: store.getState().count + 1,
});

// 自减
store.changeState({
  count: store.getState().count - 1,
});

/**
 * 随意更改
 *
 * 如果是在普通JS 中，这个下面的count 是没有约束的， 可以随意更改
 * 如果是在TS 中， 这个是有约束的， 会有TS 的语法提示
 * 但是本质上依然开始可以这样修改的
 * 所以本质上依然是没有规划的情况
 *
 * 制定一个 state 修改计划，告诉 store，我的修改计划是什么.
 * 修改 store.changeState 方法，告诉它修改 state 的时候，按照我们的计划修改。
 *
 * 这个时候需要回到 01 的方法， 添加一个plan
 */
store.changeState({
  count: 'adfdfad',
});

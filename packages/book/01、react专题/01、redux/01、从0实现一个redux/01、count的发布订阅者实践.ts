let state = {
  count: 1,
};

let listeners = [];

function subScribe(listener) {
  listeners.push(listener);
}

function changeCount(count) {
  state.count = count;
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i];
    listener();
  }
}

subScribe(() => console.log(state.count));
subScribe(() => console.log('-----'));

changeCount(2);
changeCount(3);
changeCount(4);

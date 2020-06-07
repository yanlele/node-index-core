/**
 * 我们知道，在创建一个Promise实例时，都会立即执行executor函数，
 * executor函数传递两个参数，resolve和reject，如果executor函数执行错误，Promise实例状态会变为rejected
 */
class MyPromise {
  private status: 'pending' | 'resolved' | 'rejected';
  private value: any;

  constructor(executor: Function) {
    this.status = 'pending';
    this.value = undefined;

    const resolve = (result: any) => {
      if (this.status !== 'pending') return;
      this.status = 'resolved';
      this.value = result;
    };

    const reject = (response: any) => {
      if (this.status !== 'pending') return;
      this.status = 'rejected';
      this.value = response;
    };

    try {
      // resolve, reject 实际上就是两个方法，
      // 做的事情就是更新状态，返回值
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
}

/* ==============================  测试 - Start ============================== */
const p1 = new MyPromise((resolve: any) => {
  resolve(1);
});

const p2 = new MyPromise((resolve: any, reject: any) => {
  reject(2);
});

console.log(p1);
console.log(p2);
/* ==============================  测试 - End   ============================== */

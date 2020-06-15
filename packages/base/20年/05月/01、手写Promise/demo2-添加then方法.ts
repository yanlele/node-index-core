type Status = 'pending' | 'resolved' | 'rejected';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyPromise {
  private status: Status;
  private value: any = undefined;
  private resolveArr: Function[] = [];
  private rejectArr: Function[] = [];

  constructor(executor: Function) {
    const change = (status: Status, value: any) => {
      if (this.status !== 'pending') return;
      this.status = status;
      this.value = value;
      const fnArr = status === 'resolved' ? this.resolveArr : this.rejectArr;
      fnArr.forEach(item => item(this.value));
    };

    const resolve = (result: any) => change('resolved', result);
    const reject = (reason: any) => change('rejected', reason);
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(resolveFunction: Function, rejectFunction: Function) {
    resolveFunction = (result: any) => result;
    rejectFunction = (reason: any) => reason;
    return new MyPromise((resolve: Function, reject: Function) => {
      this.resolveArr.push((result: any) => {
        try {
          const x = resolveFunction(result);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
            return;
          }
        } catch (e) {
          reject(e);
        }
      });

      this.rejectArr.push((reason: any) => {
        try {
          const x = rejectFunction(reason);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
            return;
          }
        } catch (e) {
          reject(e);
        }
      });
    });
  }
}

export default {};

/* ==============================  测试 - Start ============================== */
// 这里其实什么都没有输出
new MyPromise((resolve: Function) => {
  resolve(1);
}).then(
  (res: number) => {
    console.log(res, 'success');
  },
  (err: number) => {
    console.log(err, 'error');
  },
);
/* ==============================  测试 - End   ============================== */

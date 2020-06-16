type Status = 'pending' | 'resolved' | 'rejected';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyPromise {
  status: Status = 'pending';
  value: any = undefined;
  resolveArr: Function[] = [];
  rejectArr: Function[] = [];

  constructor(executor: Function) {
    const change = (status: Status, value: any): void => {
      if (this.status === 'pending') return;
      this.status = status;
      this.value = value;

      const fnArr = status === 'resolved' ? this.resolveArr : this.rejectArr;
      fnArr.forEach(item => item(this.value));
    };

    const resolve = (resolve: any): void => change('resolved', resolve);
    const reject = (reject: any): void => change('rejected', reject);
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(resolveFn: Function, rejectFn: Function): MyPromise {
    return new MyPromise((resolve: Function, reject: Function) => {
      this.resolveArr.push((result: any) => {
        try {
          const x = resolveFn(result);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
            return;
          }
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });

      this.rejectArr.push((reason: any) => {
        try {
          const x = rejectFn(reason);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
            return;
          }
          resolve(x);
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
// new MyPromise((resolve: Function) => {
//   resolve(1);
// }).then(
//   (res: number) => {
//     console.log(res, 'success');
//   },
//   (err: number) => {
//     console.log(err, 'error');
//   },
// );

// 做一点小小的改动
new MyPromise((resolve: Function) => {
  setTimeout(() => {
    resolve(1);
  }, 0);
}).then(
  (res: number) => {
    console.log(res, 'success');
  },
  (err: number) => {
    console.log(err, 'error');
  },
);
/* ==============================  测试 - End   ============================== */

type Status = 'pending' | 'resolved' | 'rejected';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyPromise {
  status: Status;
  value: any;
  resolveArr: Function[];
  rejectArr: Function[];

  constructor(executor: Function) {
    this.status = 'pending'; // 初始化状态为pending
    this.value = undefined; // 初始化返回的成功的结果或者失败的原因
    this.resolveArr = []; // 初始化then中成功的方法
    this.rejectArr = []; // 初始化then中失败的方法

    // 定义change方法，因为我们发现好像resolve和reject方法共同的地方还挺多🤔
    const change = (status: Status, value: any): void => {
      if (this.status !== 'pending') return;
      this.status = status;
      this.value = value;

      // 根据状态判断要执行成功的方法或失败的方法
      const fnArr = status === 'resolved' ? this.resolveArr : this.rejectArr;

      // fnArr中的方法依次执行
      fnArr.forEach(item => {
        item(this.value);
      });
    };
    // 这里是resolve方法，成功后执行，将状态改变为resolved，并且将结果返回
    const resolve = (resolve: any): void => change('resolved', resolve);

    // 这里是reject方法，异常时执行，状态改为rejected，并且将失败的原因返回
    const reject = (reject: any): void => change('rejected', reject);

    // try、catch捕获异常，如果错误，执行reject方法
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
          const x = resolveFn(result); // 获取执行成功方法返回的结果

          // 如果x是一个promise实例，则继续调用then方法 ==> then链的实现
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
            return;
          }
          // 不是promise实例，直接执行成功的方法
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

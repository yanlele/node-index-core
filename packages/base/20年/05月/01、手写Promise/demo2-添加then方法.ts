type Status = 'pending' | 'resolved' | 'rejected';

class MyPromise {
  status: Status;
  value: any;
  resolveArr: Function[];
  rejectArr: Function[];

  constructor(executor: (resolve: Function, reject: Function) => void) {
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
    const resolve = (result: any): void => {
      // 如果有值， 立即改变状态
      if (this.resolveArr.length > 0) {
        change('resolved', result);
      }
      // 没有值，延后改变状态
      const timer = setTimeout(() => {
        change('resolved', result);
        clearTimeout(timer);
      });
    };

    // 这里是reject方法，异常时执行，状态改为rejected，并且将失败的原因返回
    const reject = (reason: any): void => {
      if (this.rejectArr.length > 0) {
        change('rejected', reason);
      }
      const timer = setTimeout(() => {
        change('rejected', reason);
        clearTimeout(timer);
      });
    };

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
new MyPromise((resolve: Function, reject: Function) => {
  resolve('我成功啦，吼吼吼～～～～');
  reject('我都已经成功了，你别想让我失败，哼～～');
}).then(
  (res: string) => {
    console.log(res, 'success');
  },
  (err: string) => {
    console.log(err, 'error');
  },
);

new MyPromise((resolve, reject) => {
  reject('失败了，我好委屈，呜呜呜～～');
  resolve('已经失败了～～～');
}).then(
  (res: string) => {
    console.log(res, 'success');
  },
  (err: string) => {
    console.log(err, 'error');
  },
);

// 3、链式调用
new MyPromise((resolve, reject) => {
  reject('失败了，我好委屈，呜呜呜～～');
  resolve('已经失败了～～～');
})
  .then(
    (res: string) => {
      console.log(res);
    },
    (err: string) => {
      console.log(err, 'error'); // 失败了，我好委屈，呜呜呜～～ error
      return '我要发奋图强，不会被困难所击倒，我要成功！！！';
    },
  )
  .then(
    (res1: string) => {
      console.log(res1, '经过不懈努力，我终于在第二次成功了～'); // 我要发奋图强，不会被困难所击倒，我要成功！！！  经过不懈努力，我终于在第二次成功了～
    },
    (err1: string) => {
      console.log(err1, '第二次失败');
    },
  );
/* ==============================  测试 - End   ============================== */

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

    const change = (status: Status, value: any) => {
      if (this.status === 'pending') return true;
      this.status = status;
      this.value = value;
      const fnArr = this.status === 'resolved' ? this.resolveArr : this.rejectArr;
      fnArr.forEach(item => item(value));
    };

    const resolve = (result: any) => {
      if (this.resolveArr.length > 0) change('resolved', result);
      const timer = setTimeout(() => {
        change('resolved', result);
        clearTimeout(timer);
      });
    };

    const reject = (reason: any) => {
      if (this.rejectArr.length > 0) change('rejected', reason);
      const timer = setTimeout(() => {
        change('rejected', reason);
        clearTimeout(timer);
      });
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(resolveFn?: Function, rejectFn?: Function): MyPromise {
    if (!resolveFn) resolveFn = (result: any) => result;
    if (!rejectFn) rejectFn = (reason: any) => reason;
    return new MyPromise((resolve, reject) => {
      this.resolveArr.push((result: any) => {
        try {
          const x = resolveFn(result);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
            return;
          }
          resolve(x);
        } catch (err) {
          reject(err);
        }
      });
      this.rejectArr.push((reason: any) => {
        try {
          const x = rejectFn(reason);
          if (x instanceof MyPromise) {
            x.then(reject, resolve);
            return;
          }
          resolve(x);
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  catch(rejectFu: Function): MyPromise {
    return this.then(null, rejectFu);
  }

  static all(promiseList: MyPromise[]): MyPromise {
    return new MyPromise((resolve, reject) => {
      let index = 0;
      const results: any[] = [];
      for (let i = 0; i < promiseList.length; i++) {
        const item = promiseList[i];
        if (!(item instanceof MyPromise)) return;
        item
          .then((result: any) => {
            index++;
            results[i] = result;
            if (index === promiseList.length) resolve(results);
          })
          .catch((reason: any) => {
            reject(reason);
          });
      }
    });
  }
}

/* ==============================  测试 - Start ============================== */
new MyPromise((resolve: Function, reject: Function) => {
  resolve('我成功啦，吼吼吼～～～～');
  reject('我都已经成功了，你别想让我失败，哼～～');
});
/* ==============================  测试 - End   ============================== */

export default {};

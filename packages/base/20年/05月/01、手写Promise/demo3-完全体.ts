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


  }
}

/* ==============================  测试 - Start ============================== */
new MyPromise((resolve: Function, reject: Function) => {
  resolve('我成功啦，吼吼吼～～～～');
  reject('我都已经成功了，你别想让我失败，哼～～');
});
/* ==============================  测试 - End   ============================== */

export default {};

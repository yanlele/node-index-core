type Status = 'pending' | 'resolved' | 'rejected';

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
}

export default {};

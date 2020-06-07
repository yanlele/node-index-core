class MyPromise {
  private status: 'pending' | 'resolved' | 'rejected';
  private value: any = undefined;
  private resolveArr: any[] = [];
  private rejectArr: any[] = [];

  constructor(executor: Function) {}
}

export default {};

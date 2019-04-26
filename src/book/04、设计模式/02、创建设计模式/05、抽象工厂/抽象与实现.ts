class Car {
  protected type: string;
  constructor() {
    this.type = 'car'
  }
  getPrice(): Error | number{
    return new Error('匿名类不可调用');
  }

  getSpeed(): Error | number {
    return new Error('匿名类不可调用');
  }

  public getType(): string {
    return this.type;
  }
}

class BMW extends Car {
  private readonly price: number;
  private readonly speed: number;

  constructor(price, speed) {
    super();
    this.price = price;
    this.speed = speed;
  }

  getPrice(): Error | number {
    return this.price;
  }

  getSpeed(): Error | number {
    return this.speed;
  }
}

const bmw = new BMW(10000, 200);
console.log('price', bmw.getPrice());
console.log('speed', bmw.getSpeed());
console.log('type', bmw.getType());





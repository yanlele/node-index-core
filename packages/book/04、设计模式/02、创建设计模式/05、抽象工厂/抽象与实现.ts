class Car {
  private readonly type: string;

  constructor() {
    this.type = 'car';
  }

  getPrice(): Error | number {
    return new Error('匿名类不可调用');
  }

  getSpeed(): Error | number {
    return new Error('匿名类不可调用');
  }

  public getType(): string {
    return this.type;
  }
}

class Bus {
  private readonly type: string = 'Bus';

  getPrice(): Error | number {
    return new Error('匿名类不可调用');
  }

  getSpeed(): Error | number {
    return new Error('匿名类不可调用');
  }

  getType(): string {
    return this.type;
  }
}

// class Truck {
//   private readonly type: string = 'Truck';
//
//   getPrice(): Error | number {
//     return new Error('匿名类不可调用');
//   }
//
//   getSpeed(): Error | number {
//     return new Error('匿名类不可调用');
//   }
//
//   getType(): string {
//     return this.type;
//   }
// }

// 宝马车
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
console.log('----------');

// Lamborghini
class Lamborghini extends Car {
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

const labbo = new Lamborghini(100000, 220);
console.log(labbo.getPrice());
console.log(labbo.getSpeed());
console.log(labbo.getType());
console.log('----------');

class YUTONG extends Bus {
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

const yutong = new YUTONG(20000, 60);
console.log(yutong.getPrice());
console.log(yutong.getSpeed());
console.log(yutong.getType());
console.log('----------');

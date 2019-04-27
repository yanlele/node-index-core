var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var Car = (function() {
  function Car() {
    this.type = 'car';
  }
  Car.prototype.getPrice = function() {
    return new Error('匿名类不可调用');
  };
  Car.prototype.getSpeed = function() {
    return new Error('匿名类不可调用');
  };
  Car.prototype.getType = function() {
    return this.type;
  };
  return Car;
})();
var Bus = (function() {
  function Bus() {
    this.type = 'Bus';
  }
  Bus.prototype.getPrice = function() {
    return new Error('匿名类不可调用');
  };
  Bus.prototype.getSpeed = function() {
    return new Error('匿名类不可调用');
  };
  Bus.prototype.getType = function() {
    return this.type;
  };
  return Bus;
})();
var BMW = (function(_super) {
  __extends(BMW, _super);
  function BMW(price, speed) {
    var _this = _super.call(this) || this;
    _this.price = price;
    _this.speed = speed;
    return _this;
  }
  BMW.prototype.getPrice = function() {
    return this.price;
  };
  BMW.prototype.getSpeed = function() {
    return this.speed;
  };
  return BMW;
})(Car);
var bmw = new BMW(10000, 200);
console.log('price', bmw.getPrice());
console.log('speed', bmw.getSpeed());
console.log('type', bmw.getType());
console.log('----------');
var Lamborghini = (function(_super) {
  __extends(Lamborghini, _super);
  function Lamborghini(price, speed) {
    var _this = _super.call(this) || this;
    _this.price = price;
    _this.speed = speed;
    return _this;
  }
  Lamborghini.prototype.getPrice = function() {
    return this.price;
  };
  Lamborghini.prototype.getSpeed = function() {
    return this.speed;
  };
  return Lamborghini;
})(Car);
var labbo = new Lamborghini(100000, 220);
console.log(labbo.getPrice());
console.log(labbo.getSpeed());
console.log(labbo.getType());
console.log('----------');
var YUTONG = (function(_super) {
  __extends(YUTONG, _super);
  function YUTONG(price, speed) {
    var _this = _super.call(this) || this;
    _this.price = price;
    _this.speed = speed;
    return _this;
  }
  YUTONG.prototype.getPrice = function() {
    return this.price;
  };
  YUTONG.prototype.getSpeed = function() {
    return this.speed;
  };
  return YUTONG;
})(Bus);
var yutong = new YUTONG(20000, 60);
console.log(yutong.getPrice());
console.log(yutong.getSpeed());
console.log(yutong.getType());
console.log('----------');
//# sourceMappingURL=抽象与实现.js.map

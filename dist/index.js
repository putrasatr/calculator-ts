var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var Calculator = /** @class */ (function () {
  function Calculator(x) {
    var _this = this;
    this.countLoop = function (sym) {
      var n = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
      }
      var result = 0;
      for (var i = 0; i < n.length; i++) {
        result = result ? eval("result ".concat(sym, " n[i]")) : n[i];
      }
      _this.x = eval("".concat(_this.x).concat(sym).concat(result));
      return _this.x;
    };
    this.x = x;
  }
  Calculator.prototype.add = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      n[_i] = arguments[_i];
    }
    return this.countLoop.apply(this, __spreadArray(["+"], n, false));
  };
  Calculator.prototype.subtract = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      n[_i] = arguments[_i];
    }
    return this.countLoop.apply(this, __spreadArray(["-"], n, false));
  };
  Calculator.prototype.multiple = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      n[_i] = arguments[_i];
    }
    return this.countLoop.apply(this, __spreadArray(["*"], n, false));
  };
  Calculator.prototype.divide = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      n[_i] = arguments[_i];
    }
    return this.countLoop.apply(this, __spreadArray(["/"], n, false));
  };
  Calculator.prototype.result = function () {
    console.log(this.x);
    return this.x;
  };
  return Calculator;
})();
var ScientCalc = /** @class */ (function (_super) {
  __extends(ScientCalc, _super);
  function ScientCalc(x, pi) {
    if (pi === void 0) {
      pi = 22 / 7;
    }
    var _this = _super.call(this, x) || this;
    _this.pi = pi;
    return _this;
  }
  ScientCalc.prototype.sqrt = function (n) {
    return n * n;
  };
  ScientCalc.prototype.pow = function (props) {
    if (props === void 0) {
      props = { n: 0, x: 1 };
    }
    var x = props.x || 1;
    var num = props.n || this.x;
    var result = 1;
    for (var i = 0; i < x; i++) {
      result = result * num;
    }
    this.x = result;
    return this.x;
  };
  ScientCalc.prototype.typing = function (props) {
    try {
      this.x = Number(eval(this.x + props.prev + props.line));
      return this.x;
    } catch (error) {
      return "Inputan tidak valid";
    }
  };
  return ScientCalc;
})(Calculator);
var getCalculator = new ScientCalc(2);
console.log("Hasil Tambah =", getCalculator.add(1, 1, 20, 1));
console.log("Hasil Kurang =", getCalculator.subtract(23));
console.log("Hasil Kali =", getCalculator.multiple(2, 2));
console.log("Hasil Bagi =", getCalculator.divide(25, 5));
console.log(
  "Hasil Ketik =",
  getCalculator.typing({
    line: "(23-20)*2",
    prev: "*",
  })
);
console.log("Hasil pangkat dua =", getCalculator.sqrt(3));
console.log("Hasil pangkat =", getCalculator.pow({ x: 2, n: 100 }));
var secondCalc = new ScientCalc(0);
secondCalc.add(3);
secondCalc.pow({ x: 1 });
secondCalc.result();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lsp2;
(function (lsp2) {
    var Rectangles = /** @class */ (function () {
        function Rectangles() {
        }
        Rectangles.prototype.shapyeType = function () {
            console.log("bir dikdörtgendir"); //kare ve dikdörtgen ortak özelliği
        };
        return Rectangles;
    }());
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(heigh, width) {
            var _this = _super.call(this) || this;
            _this.heigh = heigh;
            _this.width = width;
            return _this;
        }
        Rectangle.prototype.getArea = function () {
            return this.heigh * this.width;
        };
        return Rectangle;
    }(Rectangles));
    var Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square(side) {
            var _this = _super.call(this) || this;
            _this.side = side;
            return _this;
        }
        Square.prototype.getArea = function () {
            return this.side * this.side;
        };
        return Square;
    }(Rectangles));
    var rect;
    rect = new Square(10);
    rect.shapyeType();
    if (rect instanceof Square) {
        console.log("karenin alan\u0131: ".concat(rect.getArea())); //cast ettiğimizde getArea methoduna eriştik
    }
    rect = new Rectangle(10, 12);
    rect.shapyeType();
    if (rect instanceof Rectangle) {
        console.log("dikd\u00F6rtgenin alan\u0131: ".concat(rect.getArea())); //cast ettiğimizde getArea methoduna eriştik
    }
    /*
    //wrong way

    class Rectangle{

       heigh:number;
       width:number;
       constructor(heigh:number,width:number)
       {
           this.heigh=heigh;
           this.width=width;
       }

        getArea() {
        return this.width * this.heigh;
      }

    }

    class Square extends Rectangle{
        side:number;
        constructor(side:number){
            super(side,side)
        }
           
    }

    // Karede bir dikdörtgendir ama alan hesabında heigh=20 verdiğimizde çıktı 200 oluyor ama 400 olması gerekir.
   
    const rect: Rectangle = new Square(10);
    rect.heigh=20;

    console.log(rect.getArea());

*/
})(lsp2 || (lsp2 = {}));

//Liskov Substitution Principle (LSP)
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
var lsp1;
(function (lsp1) {
    var Birds = /** @class */ (function () {
        function Birds() {
        }
        Birds.prototype.layEgg = function () {
            console.log("yumurtlar"); //bütün kuşların ortak özelliği
        };
        return Birds;
    }());
    var FlyingBirds = /** @class */ (function (_super) {
        __extends(FlyingBirds, _super);
        function FlyingBirds() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FlyingBirds.prototype.fly = function () {
            console.log("uçabilirler");
        };
        return FlyingBirds;
    }(Birds));
    var SwimmingBirds = /** @class */ (function (_super) {
        __extends(SwimmingBirds, _super);
        function SwimmingBirds() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SwimmingBirds.prototype.fly = function () {
            throw new Error("uçamazlar");
        };
        return SwimmingBirds;
    }(Birds));
    var bird;
    bird = new FlyingBirds();
    bird.layEgg();
    if (bird instanceof FlyingBirds) {
        bird.fly(); //cast ettiğimizde fly methoduna eriştik
    }
    bird = new SwimmingBirds();
    bird.layEgg();
    if (bird instanceof SwimmingBirds) {
        bird.fly; //cast ettiğimizde fly methoduna eriştik
    }
    //WRONG WAY
    /*
       class Birds{
        fly(){
            //
        }
       }
       class eagle extends Birds{
          dive(){
            //
          }
       }
       class penguin extends Birds{
        //penguenler uçamaz
       }
    
    */
})(lsp1 || (lsp1 = {}));

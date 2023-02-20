//polymorphism
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
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.calculatePrice = function () {
        return this.price;
    };
    return User;
}());
var GoldenUser = /** @class */ (function (_super) {
    __extends(GoldenUser, _super);
    function GoldenUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoldenUser.prototype.calculatePrice = function () {
        var basePrice = _super.prototype.calculatePrice.call(this);
        return basePrice * 4;
    };
    return GoldenUser;
}(User));
var PremiumUser = /** @class */ (function (_super) {
    __extends(PremiumUser, _super);
    function PremiumUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PremiumUser.prototype.calculatePrice = function () {
        var basePrice = _super.prototype.calculatePrice.call(this);
        return basePrice * 2;
    };
    return PremiumUser;
}(User));
var NormalUser = /** @class */ (function (_super) {
    __extends(NormalUser, _super);
    function NormalUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalUser.prototype.calculatePrice = function () {
        // var basePrice = super.calculatePrice();
        return 0;
    };
    return NormalUser;
}(User));
var premium = new PremiumUser();
premium.name = "Naz";
premium.country = "Türkiye";
premium.price = 20;
console.log("premium kullan\u0131c\u0131 \u00FCcreti: ".concat(premium.calculatePrice(), " tl"));
var normal = new NormalUser();
normal.name = "Mert";
normal.country = "Türkiye";
normal.age = 22;
normal.price = 20;
console.log("normal kullan\u0131c\u0131 \u00FCcreti: ".concat(normal.calculatePrice(), " tl"));
var golden = new GoldenUser();
golden.name = "Eda";
golden.country = "Türkiye";
golden.price = 20;
console.log("golden kullan\u0131c\u0131 \u00FCcreti: ".concat(golden.calculatePrice(), " tl"));
console.log("-----------------------------------------------------------------------------------");
var baseUser = premium;
console.log("premium kullan\u0131c\u0131 \u00FCcreti:".concat(baseUser.calculatePrice(), " tl"));
baseUser = normal;
console.log("normal kullan\u0131c\u0131 \u00FCcreti::".concat(baseUser.calculatePrice(), " tl - age : ").concat(baseUser.age));
baseUser = golden;
console.log(" golden kullan\u0131c\u0131 \u00FCcreti :".concat(baseUser.calculatePrice(), " tl"));

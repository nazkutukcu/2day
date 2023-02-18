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
var BasePhone = /** @class */ (function () {
    function BasePhone() {
    }
    BasePhone.prototype.call = function () {
        console.log("arama yapıldı");
    };
    return BasePhone;
}());
var Iphone12 = /** @class */ (function (_super) {
    __extends(Iphone12, _super);
    function Iphone12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Iphone12.prototype.takePhoto = function () {
        console.log("fotoğraf çekildi");
    };
    return Iphone12;
}(BasePhone));
var Nokia = /** @class */ (function (_super) {
    __extends(Nokia, _super);
    function Nokia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nokia.prototype.takePhoto = function () {
        throw new Error("fotoğraf çekme özelliği yok");
    };
    return Nokia;
}(BasePhone));
var phone;
phone = new Iphone12;
phone.call();
if (phone instanceof Iphone12) {
    phone.takePhoto();
}
phone = new Nokia;
phone.call();

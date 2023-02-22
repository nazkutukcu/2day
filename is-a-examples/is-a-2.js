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
var isA2;
(function (isA2) {
    var Device = /** @class */ (function () {
        function Device() {
        }
        return Device;
    }());
    var Telephone1 = /** @class */ (function (_super) {
        __extends(Telephone1, _super);
        function Telephone1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Telephone1.prototype.sendMessage = function () {
            console.log("Mesaj gönderebilir");
        };
        Telephone1.prototype.call = function () {
            console.log("Sesli arama yapabilir");
        };
        Telephone1.prototype.takePicture = function () {
            console.log("Fotoğraf çekebilir");
        };
        return Telephone1;
    }(Device));
    var Telephone2 = /** @class */ (function (_super) {
        __extends(Telephone2, _super);
        function Telephone2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Telephone2.prototype.sendMessage = function () {
            console.log("Mesaj gönderebilir");
        };
        Telephone2.prototype.call = function () {
            console.log("Sesli arama yapabilir");
        };
        Telephone2.prototype.takePicture = function () {
            console.log("Fotoğraf çekebilir");
        };
        return Telephone2;
    }(Device));
    var Camera = /** @class */ (function (_super) {
        __extends(Camera, _super);
        function Camera() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Camera.prototype.sendMessage = function () {
            throw new Error("mesaj gönderemez");
        };
        Camera.prototype.call = function () {
            throw new Error("arama yapamaz");
        };
        Camera.prototype.takePicture = function () {
            console.log("Fotoğraf çekebilir");
        };
        return Camera;
    }(Device));
    var telephone1 = new Telephone1();
    telephone1.call();
    telephone1.sendMessage();
    telephone1.takePicture();
    console.log("------------------------------------");
    var telephone2 = new Telephone2();
    telephone2.call();
    telephone2.sendMessage();
    telephone2.takePicture();
    console.log("------------------------------------");
    var camera = new Camera(); //buradan error gelicek
    camera.call();
    camera.sendMessage();
    camera.takePicture();
})(isA2 || (isA2 = {}));

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
var UpBehaviorType1 = /** @class */ (function () {
    function UpBehaviorType1() {
    }
    UpBehaviorType1.prototype.Up = function () {
        console.log("up type 1");
    };
    return UpBehaviorType1;
}());
var UpBehaviorType2 = /** @class */ (function () {
    function UpBehaviorType2() {
    }
    UpBehaviorType2.prototype.Up = function () {
        console.log("up type 2");
    };
    return UpBehaviorType2;
}());
var UpBehaviorType3 = /** @class */ (function () {
    function UpBehaviorType3() {
    }
    UpBehaviorType3.prototype.Up = function () {
        console.log("up type 3");
    };
    return UpBehaviorType3;
}());
var DownBehaviorType1 = /** @class */ (function () {
    function DownBehaviorType1() {
    }
    DownBehaviorType1.prototype.Down = function () {
        console.log("down type 1");
    };
    return DownBehaviorType1;
}());
var DownBehaviorType2 = /** @class */ (function () {
    function DownBehaviorType2() {
    }
    DownBehaviorType2.prototype.Down = function () {
        console.log("down type 2");
    };
    return DownBehaviorType2;
}());
var DownBehaviorType3 = /** @class */ (function () {
    function DownBehaviorType3() {
    }
    DownBehaviorType3.prototype.Down = function () {
        console.log("down type 3");
    };
    return DownBehaviorType3;
}());
var BaseBall = /** @class */ (function () {
    function BaseBall(upBehavior, downBehavior) {
        this._upBehavior = upBehavior;
        this._downBehavior = downBehavior;
    }
    BaseBall.prototype.SetUpOrDownBehavior = function (upBehavior, downBehavior) {
        this._upBehavior = upBehavior;
        this._downBehavior = downBehavior;
    };
    BaseBall.prototype.Yukarı = function () {
        console.log("yukarı");
    };
    BaseBall.prototype.Asagı = function () {
        console.log("aşağı");
    };
    BaseBall.prototype.Up = function () {
        this._upBehavior.Up();
    };
    BaseBall.prototype.Down = function () {
        this._downBehavior.Down();
    };
    return BaseBall;
}());
var Ball1 = /** @class */ (function (_super) {
    __extends(Ball1, _super);
    function Ball1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ball1;
}(BaseBall));
var Ball2 = /** @class */ (function (_super) {
    __extends(Ball2, _super);
    function Ball2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ball2;
}(BaseBall));
var Ball3 = /** @class */ (function (_super) {
    __extends(Ball3, _super);
    function Ball3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ball3;
}(BaseBall));
var b1 = new Ball1(new UpBehaviorType2(), new DownBehaviorType3());
b1.Yukarı();
b1.Asagı();
b1.Up();
b1.Down();
b1.SetUpOrDownBehavior(new UpBehaviorType1(), new DownBehaviorType1());
b1.Up();
b1.Down();

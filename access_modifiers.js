//public private protected
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.method1 = function () {
    };
    Object.defineProperty(A.prototype, "count2", {
        get: function () {
            return this._count2;
        },
        set: function (a) {
            if (a > 50 && a < 250) {
                this._count2 = a;
            }
            else {
                throw new Error("değer 50 ile 250 arasında olmalıdır");
            }
        },
        enumerable: false,
        configurable: true
    });
    //1.way(get,set)
    A.prototype.SetCount = function (number) {
        if (number > 1 && number < 100) {
            this._count = number;
        }
        else {
            throw new Error("değer 1 ile 100 arasında olmalı");
        }
    };
    A.prototype.GetCount = function () {
        return this._count;
    };
    return A;
}());
//1.yol
var a1 = new A();
a1.SetCount(50);
a1.GetCount();
a1.method1();
//2.yol
var a2 = new A();


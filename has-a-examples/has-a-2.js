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
var hasA2;
(function (hasA2) {
    //
    var GetDataType1 = /** @class */ (function () {
        function GetDataType1() {
        }
        GetDataType1.prototype.getData = function () {
            console.log("model1 data alındı");
        };
        return GetDataType1;
    }());
    var GetDataType2 = /** @class */ (function () {
        function GetDataType2() {
        }
        GetDataType2.prototype.getData = function () {
            console.log("model2 data alındı");
        };
        return GetDataType2;
    }());
    var GetDataType3 = /** @class */ (function () {
        function GetDataType3() {
        }
        GetDataType3.prototype.getData = function () {
            console.log("model3 data alındı");
        };
        return GetDataType3;
    }());
    var SetDataType1 = /** @class */ (function () {
        function SetDataType1() {
        }
        SetDataType1.prototype.setData = function () {
            console.log("model1 data gönderildi");
        };
        return SetDataType1;
    }());
    var SetDataType2 = /** @class */ (function () {
        function SetDataType2() {
        }
        SetDataType2.prototype.setData = function () {
            console.log("model2 data gönderildi");
        };
        return SetDataType2;
    }());
    var SetDataType3 = /** @class */ (function () {
        function SetDataType3() {
        }
        SetDataType3.prototype.setData = function () {
            console.log("model3 data gönderildi");
        };
        return SetDataType3;
    }());
    var EditData = /** @class */ (function () {
        function EditData(getData, setData) {
            this._getData = getData;
            this._setData = setData;
        }
        EditData.prototype.SetGetDataOrSetData = function (getData, setData) {
            this._getData = getData;
            this._setData = setData;
        };
        EditData.prototype.getData = function () {
            this._getData.getData();
        };
        EditData.prototype.setData = function () {
            this._setData.setData();
        };
        return EditData;
    }());
    var View1 = /** @class */ (function (_super) {
        __extends(View1, _super);
        function View1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return View1;
    }(EditData));
    var view1 = new View1(new GetDataType2(), new SetDataType3());
    view1.getData();
    view1.setData();
    view1.SetGetDataOrSetData(new GetDataType1(), new SetDataType1());
    view1.getData();
    view1.setData();
})(hasA2 || (hasA2 = {}));
